#!/usr/bin/env python3
"""
Course Progress Tracking Script
Automatically tracks and reports progress across all courses
"""

import os
import json
import datetime
from pathlib import Path
import re

class CourseProgressTracker:
    def __init__(self, workspace_root):
        self.workspace_root = Path(workspace_root)
        self.courses = {
            'MO-IT103-Computer-Programming-2': {
                'full_name': 'Computer Programming 2',
                'key_areas': ['Programming', 'Web Development', 'Database Integration']
            },
            'MO-IT143-Ethical-Hacking': {
                'full_name': 'Ethical Hacking',
                'key_areas': ['Penetration Testing', 'Security Assessment', 'Vulnerability Analysis']
            },
            'MO-IT147-Information-Assurance-Security-1': {
                'full_name': 'Information Assurance and Security 1',
                'key_areas': ['Risk Assessment', 'Security Policies', 'Compliance Frameworks']
            },
            'MO-IT148-Applications-Development-Emerging-Technologies': {
                'full_name': 'Applications Development and Emerging Technologies',
                'key_areas': ['Modern Frameworks', 'Cloud Solutions', 'AI/ML Integration']
            },
            'MO-IT151-Platform-Technologies': {
                'full_name': 'Platform Technologies',
                'key_areas': ['Cloud Platforms', 'DevOps', 'Infrastructure Automation']
            }
        }
    
    def scan_course_directories(self):
        """Scan all course directories for content"""
        course_data = {}
        
        for course_code, course_info in self.courses.items():
            course_path = self.workspace_root / 'courses' / course_code
            
            if course_path.exists():
                course_data[course_code] = {
                    'full_name': course_info['full_name'],
                    'key_areas': course_info['key_areas'],
                    'assignments': self.count_files(course_path / 'assignments'),
                    'projects': self.count_files(course_path / 'projects'),
                    'notes': self.count_files(course_path / 'notes'),
                    'portfolio_items': self.count_files(course_path / 'portfolio-items'),
                    'total_files': 0,
                    'last_updated': self.get_last_modified(course_path)
                }
                
                # Calculate total files
                course_data[course_code]['total_files'] = (
                    course_data[course_code]['assignments'] +
                    course_data[course_code]['projects'] +
                    course_data[course_code]['notes'] +
                    course_data[course_code]['portfolio_items']
                )
            else:
                course_data[course_code] = {
                    'full_name': course_info['full_name'],
                    'key_areas': course_info['key_areas'],
                    'assignments': 0,
                    'projects': 0,
                    'notes': 0,
                    'portfolio_items': 0,
                    'total_files': 0,
                    'last_updated': None
                }
        
        return course_data
    
    def count_files(self, directory):
        """Count markdown files in a directory"""
        if not directory.exists():
            return 0
        return len(list(directory.glob('*.md')))
    
    def get_last_modified(self, directory):
        """Get the last modification time of any file in directory tree"""
        if not directory.exists():
            return None
        
        latest_time = None
        for file_path in directory.rglob('*'):
            if file_path.is_file():
                mod_time = datetime.datetime.fromtimestamp(file_path.stat().st_mtime)
                if latest_time is None or mod_time > latest_time:
                    latest_time = mod_time
        
        return latest_time.isoformat() if latest_time else None
    
    def calculate_progress_metrics(self, course_data):
        """Calculate overall progress metrics"""
        total_files = sum(course['total_files'] for course in course_data.values())
        active_courses = sum(1 for course in course_data.values() if course['total_files'] > 0)
        courses_with_portfolio = sum(1 for course in course_data.values() if course['portfolio_items'] > 0)
        
        # Calculate completion scores (simple heuristic)
        completion_scores = {}
        for course_code, course in course_data.items():
            score = 0
            if course['assignments'] > 0: score += 25
            if course['projects'] > 0: score += 25
            if course['notes'] > 0: score += 25
            if course['portfolio_items'] > 0: score += 25
            completion_scores[course_code] = score
        
        avg_completion = sum(completion_scores.values()) / len(completion_scores)
        
        return {
            'total_files': total_files,
            'active_courses': active_courses,
            'total_courses': len(self.courses),
            'courses_with_portfolio': courses_with_portfolio,
            'completion_scores': completion_scores,
            'average_completion': avg_completion,
            'portfolio_completion_rate': (courses_with_portfolio / len(self.courses)) * 100
        }
    
    def generate_progress_report(self, course_data, metrics):
        """Generate a comprehensive progress report"""
        report_file = self.workspace_root / 'documentation' / 'course-progress-report.md'
        
        content = f"""# Course Progress Tracking Report

**Generated**: {datetime.datetime.now().isoformat()}
**Academic Term**: TERM-3 SY-2024-25
**Program**: BS IT Network & Cybersecurity

## Executive Summary

- **Overall Progress**: {metrics['average_completion']:.1f}%
- **Active Courses**: {metrics['active_courses']}/{metrics['total_courses']}
- **Total Content Items**: {metrics['total_files']}
- **Portfolio Completion**: {metrics['portfolio_completion_rate']:.1f}%

## Course-by-Course Analysis

"""
        
        for course_code, course in course_data.items():
            completion_score = metrics['completion_scores'][course_code]
            
            # Determine status emoji
            if completion_score >= 75:
                status = "🟢 Excellent"
            elif completion_score >= 50:
                status = "🟡 Good Progress"
            elif completion_score >= 25:
                status = "🟠 Developing"
            else:
                status = "🔴 Getting Started"
            
            content += f"""### {course_code} - {course['full_name']}

**Status**: {status} ({completion_score}% complete)

**Content Summary**:
- **Assignments**: {course['assignments']} files
- **Projects**: {course['projects']} files
- **Notes**: {course['notes']} files
- **Portfolio Items**: {course['portfolio_items']} files
- **Total**: {course['total_files']} files

**Key Focus Areas**: {', '.join(course['key_areas'])}

**Last Activity**: {course['last_updated'] or 'No recent activity'}

**Recommendations**:
"""
            
            # Generate specific recommendations
            if course['assignments'] == 0:
                content += "- 📝 Start working on course assignments\n"
            if course['projects'] == 0:
                content += "- 🚀 Begin project development\n"
            if course['notes'] == 0:
                content += "- 📚 Create study notes and documentation\n"
            if course['portfolio_items'] == 0:
                content += "- 🎯 Develop portfolio items to showcase skills\n"
            
            if completion_score >= 75:
                content += "- ⭐ Excellent progress! Focus on polishing existing work\n"
                content += "- 🔍 Review and enhance portfolio presentation\n"
            
            content += "\n---\n\n"
        
        content += f"""## Progress Trends

### Completion Distribution
"""
        
        # Create a simple text-based progress visualization
        for course_code, score in metrics['completion_scores'].items():
            course_name = course_data[course_code]['full_name']
            bar = "█" * (score // 5) + "░" * (20 - (score // 5))
            content += f"- **{course_name}**: {bar} {score}%\n"
        
        content += f"""

### Achievement Highlights

- **Most Active Course**: {max(course_data.items(), key=lambda x: x[1]['total_files'])[1]['full_name']} ({max(course['total_files'] for course in course_data.values())} items)
- **Portfolio Leaders**: {len([c for c in course_data.values() if c['portfolio_items'] > 0])} courses with portfolio items
- **Content Production**: {metrics['total_files']} total items created

## Recommendations for Next Week

### Priority Actions
1. **Focus on Low-Progress Courses**: Target courses with completion < 50%
2. **Portfolio Development**: Create portfolio items for courses without them
3. **Documentation**: Enhance notes and documentation quality
4. **Project Completion**: Complete in-progress projects

### Specific Course Actions
"""
        
        # Generate specific recommendations for each course
        low_progress_courses = [code for code, score in metrics['completion_scores'].items() if score < 50]
        for course_code in low_progress_courses:
            course_name = course_data[course_code]['full_name']
            content += f"- **{course_name}**: Accelerate content creation and portfolio development\n"
        
        content += f"""

## Long-term Goals

### Academic Excellence
- Maintain consistent progress across all courses
- Develop comprehensive portfolio for each subject area
- Create professional-quality documentation

### Career Preparation
- Build industry-relevant portfolio items
- Demonstrate technical competency in all focus areas
- Prepare for professional transition post-graduation

### Skill Development Timeline
- **Technical Skills**: Continue developing programming and cybersecurity competencies
- **Portfolio Quality**: Enhance professional presentation of academic work
- **Industry Readiness**: Align coursework with industry requirements

---

## Technical Notes

- **Tracking Method**: Automated file counting and analysis
- **Update Frequency**: Can be run daily, weekly, or on-demand
- **Data Sources**: Course directory structure and file metadata
- **Accuracy**: Based on file presence; does not assess content quality

*This report is automatically generated to support academic progress monitoring and strategic planning.*

---

**Next Update Scheduled**: {(datetime.datetime.now() + datetime.timedelta(days=7)).strftime('%Y-%m-%d')}
"""
        
        # Write the report
        with open(report_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Generated course progress report at {report_file}")
        return str(report_file)
    
    def create_progress_summary(self, course_data, metrics):
        """Create a brief progress summary for quick reference"""
        summary_file = self.workspace_root / 'documentation' / 'quick-progress-summary.md'
        
        content = f"""# Quick Progress Summary

**Updated**: {datetime.date.today().isoformat()}

## At a Glance
- **Overall Progress**: {metrics['average_completion']:.1f}%
- **Active Courses**: {metrics['active_courses']}/5
- **Portfolio Items**: {sum(course['portfolio_items'] for course in course_data.values())}
- **Total Content**: {metrics['total_files']} files

## Course Status
"""
        
        for course_code, course in course_data.items():
            score = metrics['completion_scores'][course_code]
            emoji = "🟢" if score >= 75 else "🟡" if score >= 50 else "🟠" if score >= 25 else "🔴"
            short_name = course_code.replace('MO-IT', '').replace('-', ' ')
            content += f"- {emoji} **{short_name}**: {score}% ({course['total_files']} items)\n"
        
        content += f"""

## Focus This Week
{chr(10).join([f"- {course_data[code]['full_name']}" for code, score in metrics['completion_scores'].items() if score < 50][:3]) or "- Continue excellent progress across all courses"}

---
*Quick summary for daily reference*
"""
        
        with open(summary_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Created quick progress summary at {summary_file}")
    
    def run_tracking(self):
        """Run the complete course progress tracking"""
        print("Starting course progress tracking...")
        
        # Scan all course directories
        course_data = self.scan_course_directories()
        print(f"Scanned {len(course_data)} courses")
        
        # Calculate metrics
        metrics = self.calculate_progress_metrics(course_data)
        print(f"Overall progress: {metrics['average_completion']:.1f}%")
        
        # Generate reports
        self.generate_progress_report(course_data, metrics)
        self.create_progress_summary(course_data, metrics)
        
        print("Course progress tracking completed!")
        
        return {
            'course_data': course_data,
            'metrics': metrics
        }

def main():
    """Main execution function"""
    # Get workspace root (assume script is in automation/scripts/)
    script_dir = Path(__file__).parent
    workspace_root = script_dir.parent.parent
    
    tracker = CourseProgressTracker(workspace_root)
    results = tracker.run_tracking()
    
    # Print summary to console
    print("\n" + "="*50)
    print("COURSE PROGRESS SUMMARY")
    print("="*50)
    print(f"Overall Progress: {results['metrics']['average_completion']:.1f}%")
    print(f"Active Courses: {results['metrics']['active_courses']}/5")
    print(f"Total Content Items: {results['metrics']['total_files']}")
    print(f"Portfolio Completion: {results['metrics']['portfolio_completion_rate']:.1f}%")
    print("="*50)

if __name__ == "__main__":
    main()
