#!/usr/bin/env python3
"""
Portfolio Update Automation Script
Automatically updates portfolio items based on course progress
"""

import os
import json
import datetime
from pathlib import Path
import re

class PortfolioUpdater:
    def __init__(self, workspace_root):
        self.workspace_root = Path(workspace_root)
        self.courses = [
            'MO-IT103-Computer-Programming-2',
            'MO-IT143-Ethical-Hacking',
            'MO-IT147-Information-Assurance-Security-1',
            'MO-IT148-Applications-Development-Emerging-Technologies',
            'MO-IT151-Platform-Technologies'
        ]
        
    def scan_portfolio_items(self):
        """Scan all courses for portfolio items"""
        portfolio_items = []
        
        for course in self.courses:
            course_path = self.workspace_root / 'courses' / course / 'portfolio-items'
            if course_path.exists():
                for item in course_path.glob('*.md'):
                    item_info = self.extract_item_info(item, course)
                    if item_info:
                        portfolio_items.append(item_info)
        
        return portfolio_items
    
    def extract_item_info(self, file_path, course):
        """Extract portfolio item information from markdown file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract title (first # heading)
            title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
            title = title_match.group(1) if title_match else file_path.stem
            
            # Extract description (first paragraph or > quote)
            desc_match = re.search(r'^>\s*(.+)$', content, re.MULTILINE)
            if not desc_match:
                # Try to find first paragraph
                lines = content.split('\n')
                for line in lines:
                    if line.strip() and not line.startswith('#') and not line.startswith('>'):
                        desc_match = line.strip()
                        break
            
            description = desc_match.group(1) if hasattr(desc_match, 'group') else desc_match or 'Portfolio item'
            
            # Extract skills/technologies
            skills_match = re.search(r'Skills Demonstrated.*?:\s*(.+)', content, re.IGNORECASE)
            skills = skills_match.group(1) if skills_match else 'Technical skills'
            
            # Extract completion date
            date_match = re.search(r'Completion Date.*?:\s*(\d{4}-\d{2}-\d{2})', content)
            completion_date = date_match.group(1) if date_match else datetime.date.today().isoformat()
            
            return {
                'title': title,
                'description': description,
                'course': course,
                'file_path': str(file_path.relative_to(self.workspace_root)),
                'skills': skills,
                'completion_date': completion_date
            }
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            return None
    
    def update_main_portfolio(self, portfolio_items):
        """Update the main portfolio README"""
        portfolio_readme = self.workspace_root / 'portfolio' / 'README.md'
        
        # Group items by course
        items_by_course = {}
        for item in portfolio_items:
            course = item['course']
            if course not in items_by_course:
                items_by_course[course] = []
            items_by_course[course].append(item)
        
        # Generate portfolio content
        content = f"""# Academic Portfolio - TERM-3 SY-2024-25

## BS IT Network & Cybersecurity Portfolio

This portfolio showcases academic work and professional development from the third term of the BS IT Network & Cybersecurity program.

### Course Portfolio Items

"""
        
        for course in self.courses:
            course_display = course.replace('MO-IT', '').replace('-', ' ')
            content += f"#### {course_display}\n\n"
            
            if course in items_by_course:
                for item in items_by_course[course]:
                    content += f"- [{item['title']}]({item['file_path']}) - {item['description']}\n"
            else:
                content += "*Portfolio items will be added as coursework is completed.*\n"
            
            content += "\n"
        
        content += f"""
### Skills Developed

- **Programming**: Advanced programming concepts and full-stack development
- **Cybersecurity**: Ethical hacking, penetration testing, and security assessment
- **Information Assurance**: Risk assessment, security policies, and compliance frameworks
- **Emerging Technologies**: Modern frameworks, cloud solutions, and AI/ML integration
- **Platform Technologies**: Cloud platforms, DevOps, and infrastructure automation

### Professional Development

- [Achievements](achievements/)
- [Projects](projects/)
- [Skills](skills/)
- [Testimonials](testimonials/)

### Portfolio Statistics

- **Total Portfolio Items**: {len(portfolio_items)}
- **Courses with Portfolio Items**: {len(items_by_course)}/5
- **Last Updated**: {datetime.date.today().isoformat()}

---

*Last updated: {datetime.date.today().isoformat()}*
*Auto-generated by Portfolio Update Script*
"""
        
        # Write updated content
        with open(portfolio_readme, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated main portfolio README with {len(portfolio_items)} items")
    
    def update_skills_matrix(self, portfolio_items):
        """Update skills matrix based on portfolio items"""
        skills_file = self.workspace_root / 'portfolio' / 'skills' / 'README.md'
        
        # Ensure directory exists
        skills_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Extract skills from portfolio items
        all_skills = set()
        for item in portfolio_items:
            skills_text = item.get('skills', '')
            # Simple skill extraction - can be enhanced
            if skills_text:
                skills = [s.strip() for s in skills_text.split(',')]
                all_skills.update(skills)
        
        content = f"""# Skills Development Matrix

## Technical Skills Progress

### Programming Languages
- **Java**: Intermediate level - Developed through multiple coursework projects
- **Python**: Beginner to Intermediate - Security scripting and automation
- **JavaScript**: Intermediate - Web application development
- **C++**: Beginner - System programming fundamentals

### Cybersecurity Tools
- **Kali Linux**: Hands-on experience through ethical hacking coursework
- **Metasploit**: Penetration testing framework usage
- **Wireshark**: Network analysis and security assessment
- **Nmap**: Network discovery and security auditing

### Development Frameworks
- **React**: Modern web application development
- **Node.js**: Server-side JavaScript development
- **Spring Boot**: Java enterprise application development

### Cloud Platforms
- **AWS**: Cloud infrastructure and services
- **Azure**: Microsoft cloud platform experience
- **Google Cloud**: Multi-cloud competency development

## Skills from Portfolio Items

{chr(10).join([f"- **{skill}**: Demonstrated in portfolio projects" for skill in sorted(all_skills)[:10]])}

## Soft Skills

- **Problem Solving**: Developed through programming assignments and cybersecurity challenges
- **Critical Thinking**: Enhanced through security risk assessments and ethical hacking exercises
- **Communication**: Improved through project documentation and presentations
- **Teamwork**: Strengthened through collaborative coursework and group projects

## Certifications (Planned)

- [ ] CompTIA Security+
- [ ] Certified Ethical Hacker (CEH)
- [ ] AWS Certified Cloud Practitioner
- [ ] Java SE Programmer Certification

## Portfolio Integration

- **Total Skills Demonstrated**: {len(all_skills)}
- **Portfolio Items Contributing**: {len(portfolio_items)}
- **Skill Development Courses**: {len(set(item['course'] for item in portfolio_items))}

---

*Last updated: {datetime.date.today().isoformat()}*
*Skills matrix automatically updated based on portfolio content*
"""
        
        with open(skills_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated skills matrix with {len(all_skills)} skills identified")
    
    def generate_progress_report(self, portfolio_items):
        """Generate a progress report"""
        report_file = self.workspace_root / 'documentation' / 'automated-progress-report.md'
        
        # Ensure directory exists
        report_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Calculate statistics
        items_by_course = {}
        for item in portfolio_items:
            course = item['course']
            if course not in items_by_course:
                items_by_course[course] = []
            items_by_course[course].append(item)
        
        content = f"""# Automated Progress Report

**Generated**: {datetime.datetime.now().isoformat()}

## Portfolio Overview

- **Total Portfolio Items**: {len(portfolio_items)}
- **Active Courses**: {len(self.courses)}
- **Courses with Portfolio Items**: {len(items_by_course)}
- **Completion Rate**: {len(items_by_course)}/{len(self.courses)} ({(len(items_by_course)/len(self.courses)*100):.1f}%)

## Course-by-Course Breakdown

"""
        
        for course in self.courses:
            course_display = course.replace('MO-IT', '').replace('-', ' ')
            item_count = len(items_by_course.get(course, []))
            
            content += f"### {course_display}\n"
            content += f"- **Portfolio Items**: {item_count}\n"
            
            if course in items_by_course:
                content += "- **Items**:\n"
                for item in items_by_course[course]:
                    content += f"  - {item['title']} ({item['completion_date']})\n"
            else:
                content += "- **Status**: No portfolio items yet\n"
            
            content += "\n"
        
        content += f"""
## Recent Activity

### Most Recent Portfolio Items
{chr(10).join([f"- {item['title']} ({item['course']}) - {item['completion_date']}" for item in sorted(portfolio_items, key=lambda x: x['completion_date'], reverse=True)[:5]])}

## Recommendations

- **Focus Areas**: Courses with fewer portfolio items
- **Next Steps**: Continue developing comprehensive portfolio items for each course
- **Portfolio Quality**: Ensure all items demonstrate professional competency

---

*This report is generated automatically to track portfolio development progress*
"""
        
        with open(report_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Generated progress report at {report_file}")
    
    def run_update(self):
        """Run the complete portfolio update process"""
        print("Starting portfolio update automation...")
        
        # Scan for portfolio items
        portfolio_items = self.scan_portfolio_items()
        print(f"Found {len(portfolio_items)} portfolio items")
        
        # Update main portfolio
        self.update_main_portfolio(portfolio_items)
        
        # Update skills matrix
        self.update_skills_matrix(portfolio_items)
        
        # Generate progress report
        self.generate_progress_report(portfolio_items)
        
        print("Portfolio update automation completed!")

def main():
    """Main execution function"""
    # Get workspace root (assume script is in automation/scripts/)
    script_dir = Path(__file__).parent
    workspace_root = script_dir.parent.parent
    
    updater = PortfolioUpdater(workspace_root)
    updater.run_update()

if __name__ == "__main__":
    main()
