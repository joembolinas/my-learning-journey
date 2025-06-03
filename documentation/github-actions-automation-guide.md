# GitHub Actions Automation Setup Guide

## TERM-3 SY-2024-25 | Academic Workflow Automation

**Purpose**: Complete GitHub Actions automation setup for academic workspace  
**Created**: June 3, 2025  
**Status**: Ready for deployment  

---

## 🎯 **Automation Overview**

### **5 Core GitHub Actions Workflows**

1. **Weekly Task Generator** - Automated academic task creation
2. **Portfolio Auto-Update** - Achievement tracking and portfolio maintenance
3. **Progress Tracker** - Cross-course milestone monitoring
4. **Feedback Collection** - Systematic testimonial gathering
5. **Milestone Reminders** - Academic calendar and deadline alerts

---

## 📋 **Workflow Files Setup**

### **1. Weekly Task Generator**

**File**: `.github/workflows/weekly-tasks.yml`

```yaml
name: Weekly Academic Tasks
on:
  schedule:
    - cron: '0 9 * * MON'  # Every Monday at 9 AM
  workflow_dispatch:  # Manual trigger

jobs:
  create-weekly-tasks:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Create IT103 Weekly Assignment
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((new Date() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT103] Week ${week} - Programming Assignment`,
              body: `## Computer Programming 2 - Week ${week}\\n\\n**Due Date**: Next Monday\\n\\n### Tasks:\\n- [ ] Review weekly modules\\n- [ ] Complete programming exercises\\n- [ ] Update portfolio with progress\\n\\n**Labels**: IT103, assignment`,
              labels: ['IT103', 'assignment']
            });
            
      - name: Create IT143 Weekly Lab
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((new Date() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT143] Week ${week} - Ethical Hacking Lab`,
              body: `## Ethical Hacking - Week ${week}\\n\\n**Due Date**: Next Monday\\n\\n### Tasks:\\n- [ ] Security assessment exercises\\n- [ ] Document penetration testing results\\n- [ ] Update security portfolio\\n\\n**Labels**: IT143, assignment`,
              labels: ['IT143', 'assignment']
            });
```

### **2. Portfolio Auto-Update**

**File**: `.github/workflows/portfolio-update.yml`

```yaml
name: Portfolio Auto-Update
on:
  push:
    paths:
      - 'courses/*/portfolio-items/**'
      - 'portfolio/**'
  workflow_dispatch:

jobs:
  update-portfolio:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          
      - name: Install dependencies
        run: |
          pip install PyYAML markdown
          
      - name: Run Portfolio Updater
        run: python automation/scripts/portfolio_updater.py
        
      - name: Commit portfolio updates
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "Portfolio Bot"
          git add portfolio/
          git diff --staged --quiet || git commit -m "[Auto] Update portfolio with latest achievements"
          git push
```

### **3. Progress Tracker**

**File**: `.github/workflows/progress-tracker.yml`

```yaml
name: Academic Progress Tracker
on:
  schedule:
    - cron: '0 18 * * FRI'  # Every Friday at 6 PM
  workflow_dispatch:

jobs:
  track-progress:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          
      - name: Generate Progress Report
        run: python automation/scripts/course_progress_tracker.py
        
      - name: Create Progress Issue
        uses: actions/github-script@v7
        with:
          script: |
            const date = new Date().toISOString().split('T')[0];
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[Progress] Weekly Report - ${date}`,
              body: `## Weekly Academic Progress Report\\n\\n**Week Ending**: ${date}\\n\\n### Course Progress\\n- IT103: Computer Programming 2\\n- IT143: Ethical Hacking\\n- IT147: Information Assurance Security 1\\n- IT148: Applications Development Emerging Technologies\\n- IT151: Platform Technologies\\n\\n### Achievements This Week\\n- [ ] Add achievements here\\n\\n### Next Week Goals\\n- [ ] Add goals here`,
              labels: ['progress-report', 'weekly']
            });
```

### **4. Feedback Collection**

**File**: `.github/workflows/feedback-collection.yml`

```yaml
name: Feedback Collection Automation
on:
  schedule:
    - cron: '0 10 1 * *'  # First day of every month at 10 AM
  workflow_dispatch:

jobs:
  collect-feedback:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Create Monthly Feedback Discussion
        uses: actions/github-script@v7
        with:
          script: |
            const date = new Date();
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            github.rest.discussions.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              category_id: 'feedback',
              title: `${month} ${year} - Portfolio Feedback Collection`,
              body: `## Monthly Portfolio Feedback - ${month} ${year}\\n\\n### Projects for Review\\n\\n**IT103 Projects:**\\n- Database integration projects\\n- Full-stack applications\\n\\n**IT143 Projects:**\\n- Security assessments\\n- Penetration testing reports\\n\\n**IT147 Projects:**\\n- Risk assessment frameworks\\n- Security policy documentation\\n\\n**IT148 Projects:**\\n- Emerging technology integrations\\n- Mobile applications\\n\\n**IT151 Projects:**\\n- Cloud platform solutions\\n- DevOps automation\\n\\n### Feedback Areas\\n- Technical implementation\\n- Documentation quality\\n- Professional presentation\\n- Industry relevance\\n\\n**How to provide feedback:**\\n1. Review projects in respective course folders\\n2. Comment on specific strengths and improvements\\n3. Suggest industry connections or opportunities\\n4. Provide testimonial for LinkedIn if appropriate`
            });
```

### **5. Milestone Reminders**

**File**: `.github/workflows/milestone-reminders.yml`

```yaml
name: Academic Milestone Reminders
on:
  schedule:
    - cron: '0 8 * * MON,WED,FRI'  # Monday, Wednesday, Friday at 8 AM
  workflow_dispatch:

jobs:
  milestone-reminders:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Check Upcoming Deadlines
        uses: actions/github-script@v7
        with:
          script: |
            const today = new Date();
            const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            
            // Academic calendar integration
            const milestones = [
              { date: '2025-06-15', title: 'Midterm Projects Due', courses: ['IT103', 'IT143'] },
              { date: '2025-07-01', title: 'Portfolio Review', courses: ['All'] },
              { date: '2025-07-15', title: 'Final Projects Due', courses: ['IT147', 'IT148', 'IT151'] }
            ];
            
            for (const milestone of milestones) {
              const milestoneDate = new Date(milestone.date);
              if (milestoneDate >= today && milestoneDate <= nextWeek) {
                github.rest.issues.create({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  title: `[Reminder] ${milestone.title} - ${milestone.date}`,
                  body: `## Upcoming Academic Milestone\\n\\n**Date**: ${milestone.date}\\n**Event**: ${milestone.title}\\n**Courses**: ${milestone.courses.join(', ')}\\n\\n### Preparation Checklist\\n- [ ] Review project requirements\\n- [ ] Complete pending assignments\\n- [ ] Update portfolio documentation\\n- [ ] Prepare presentation materials\\n\\n**Priority**: High`,
                  labels: ['milestone', 'reminder', 'high-priority']
                });
              }
            }
```

---

## 🔧 **Automation Scripts**

### **Portfolio Updater Script**

**File**: `automation/scripts/portfolio_updater.py`

```python
#!/usr/bin/env python3
"""
Portfolio Auto-Update Script
Updates portfolio README and achievement tracking based on course progress
"""

import os
import json
import yaml
from datetime import datetime
from pathlib import Path

class PortfolioUpdater:
    def __init__(self):
        self.base_path = Path(__file__).parent.parent.parent
        self.courses = ['MO-IT103', 'MO-IT143', 'MO-IT147', 'MO-IT148', 'MO-IT151']
        
    def scan_portfolio_items(self):
        """Scan all course portfolio items and collect achievements"""
        achievements = []
        
        for course in self.courses:
            course_path = self.base_path / 'courses' / f'{course}-*'
            portfolio_path = course_path / 'portfolio-items'
            
            if portfolio_path.exists():
                for item in portfolio_path.glob('*.md'):
                    achievement = self.parse_portfolio_item(item, course)
                    if achievement:
                        achievements.append(achievement)
        
        return achievements
    
    def parse_portfolio_item(self, file_path, course):
        """Parse individual portfolio item for achievement data"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Extract metadata from frontmatter
            if content.startswith('---'):
                _, frontmatter, _ = content.split('---', 2)
                metadata = yaml.safe_load(frontmatter)
                
                return {
                    'title': metadata.get('title', file_path.stem),
                    'course': course.replace('MO-', ''),
                    'date': metadata.get('date', datetime.now().isoformat()),
                    'skills': metadata.get('skills', []),
                    'type': metadata.get('type', 'project'),
                    'status': metadata.get('status', 'completed'),
                    'file': str(file_path.relative_to(self.base_path))
                }
        except Exception as e:
            print(f"Error parsing {file_path}: {e}")
            return None
    
    def update_portfolio_readme(self, achievements):
        """Update main portfolio README with latest achievements"""
        portfolio_readme = self.base_path / 'portfolio' / 'README.md'
        
        # Generate achievement sections
        by_course = {}
        for achievement in achievements:
            course = achievement['course']
            if course not in by_course:
                by_course[course] = []
            by_course[course].append(achievement)
        
        content = f"""# Academic Portfolio

## BS IT Network & Cybersecurity | TERM-3 SY-2024-25

**Last Updated**: {datetime.now().strftime('%B %d, %Y')}
**Total Projects**: {len(achievements)}

---

## 🎯 Course Achievements

"""
        
        course_names = {
            'IT103': 'Computer Programming 2',
            'IT143': 'Ethical Hacking',
            'IT147': 'Information Assurance Security 1',
            'IT148': 'Applications Development Emerging Technologies',
            'IT151': 'Platform Technologies'
        }
        
        for course_code, course_name in course_names.items():
            content += f"### {course_code} - {course_name}\\n\\n"
            
            if course_code in by_course:
                for achievement in by_course[course_code]:
                    content += f"- **{achievement['title']}** ({achievement['type']})\\n"
                    content += f"  - Skills: {', '.join(achievement['skills'])}\\n"
                    content += f"  - [View Project]({achievement['file']})\\n\\n"
            else:
                content += "- No portfolio items yet\\n\\n"
        
        content += """
## 📊 Skills Summary

### Technical Skills
- Programming: Python, JavaScript, SQL
- Security: Penetration Testing, Vulnerability Assessment
- Cloud: AWS, Azure, Platform Management
- Development: Full-stack Applications, Mobile Development

### Professional Skills
- Project Management
- Technical Documentation
- Risk Assessment
- Compliance Frameworks

---

## 🏆 Achievements & Certifications

- Academic Excellence in Cybersecurity Studies
- Portfolio Development through Academic Projects
- Professional Documentation Standards

---

## 📞 Contact & Professional Links

- **GitHub**: [View All Projects](../courses/)
- **LinkedIn**: [Professional Profile](#)
- **Portfolio Website**: [Live Portfolio](#)

*This portfolio is automatically updated based on academic project completions.*
"""
        
        with open(portfolio_readme, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Portfolio README updated with {len(achievements)} achievements")

if __name__ == '__main__':
    updater = PortfolioUpdater()
    achievements = updater.scan_portfolio_items()
    updater.update_portfolio_readme(achievements)
```

### **Course Progress Tracker Script**

**File**: `automation/scripts/course_progress_tracker.py`

```python
#!/usr/bin/env python3
"""
Academic Progress Tracking Script
Monitors course progress and generates comprehensive reports
"""

import os
import json
from datetime import datetime, timedelta
from pathlib import Path

class CourseProgressTracker:
    def __init__(self):
        self.base_path = Path(__file__).parent.parent.parent
        self.courses = {
            'MO-IT103': 'Computer Programming 2',
            'MO-IT143': 'Ethical Hacking',
            'MO-IT147': 'Information Assurance Security 1',
            'MO-IT148': 'Applications Development Emerging Technologies',
            'MO-IT151': 'Platform Technologies'
        }
        
    def analyze_course_progress(self):
        """Analyze progress for each course"""
        progress_data = {}
        
        for course_code, course_name in self.courses.items():
            course_path = self.base_path / 'courses' / f'{course_code}-*'
            
            # Find the actual course directory
            matching_dirs = list(self.base_path.glob(f'courses/{course_code}-*'))
            if matching_dirs:
                course_path = matching_dirs[0]
                progress_data[course_code] = self.scan_course_directory(course_path, course_name)
        
        return progress_data
    
    def scan_course_directory(self, course_path, course_name):
        """Scan individual course directory for progress metrics"""
        progress = {
            'name': course_name,
            'assignments': 0,
            'projects': 0,
            'notes': 0,
            'portfolio_items': 0,
            'last_activity': None,
            'completion_rate': 0
        }
        
        # Count files in each category
        subdirs = ['assignments', 'projects', 'notes', 'portfolio-items']
        for subdir in subdirs:
            subdir_path = course_path / subdir
            if subdir_path.exists():
                files = list(subdir_path.glob('*.md'))
                progress[subdir.replace('-', '_')] = len(files)
                
                # Find most recent activity
                if files:
                    latest_file = max(files, key=lambda f: f.stat().st_mtime)
                    file_time = datetime.fromtimestamp(latest_file.stat().st_mtime)
                    if not progress['last_activity'] or file_time > progress['last_activity']:
                        progress['last_activity'] = file_time
        
        # Calculate completion rate (basic metric)
        total_expected = 20  # Expected total activities per course
        total_actual = sum([progress['assignments'], progress['projects'], 
                           progress['notes'], progress['portfolio_items']])
        progress['completion_rate'] = min(100, (total_actual / total_expected) * 100)
        
        return progress
    
    def generate_progress_report(self, progress_data):
        """Generate comprehensive progress report"""
        report_date = datetime.now().strftime('%Y-%m-%d')
        report_path = self.base_path / 'documentation' / f'progress-report-{report_date}.md'
        
        content = f"""# Academic Progress Report

**Date**: {datetime.now().strftime('%B %d, %Y')}
**Term**: TERM-3 SY-2024-25
**Program**: BS IT Network & Cybersecurity

---

## 📊 Overall Progress Summary

"""
        
        total_completion = 0
        active_courses = 0
        
        for course_code, data in progress_data.items():
            if data['completion_rate'] > 0:
                active_courses += 1
                total_completion += data['completion_rate']
        
        average_completion = total_completion / max(active_courses, 1)
        
        content += f"**Average Completion**: {average_completion:.1f}%\\n"
        content += f"**Active Courses**: {active_courses}/5\\n"
        content += f"**Total Activities**: {sum(d['assignments'] + d['projects'] + d['notes'] + d['portfolio_items'] for d in progress_data.values())}\\n\\n"
        
        # Individual course progress
        content += "## 📚 Course-by-Course Progress\\n\\n"
        
        for course_code, data in progress_data.items():
            content += f"### {course_code} - {data['name']}\\n\\n"
            content += f"**Completion Rate**: {data['completion_rate']:.1f}%\\n\\n"
            content += f"**Activities Summary**:\\n"
            content += f"- Assignments: {data['assignments']}\\n"
            content += f"- Projects: {data['projects']}\\n"
            content += f"- Notes: {data['notes']}\\n"
            content += f"- Portfolio Items: {data['portfolio_items']}\\n\\n"
            
            if data['last_activity']:
                days_ago = (datetime.now() - data['last_activity']).days
                content += f"**Last Activity**: {days_ago} days ago\\n\\n"
            else:
                content += f"**Last Activity**: No recent activity\\n\\n"
        
        # Recommendations
        content += "## 💡 Recommendations\\n\\n"
        
        for course_code, data in progress_data.items():
            if data['completion_rate'] < 50:
                content += f"- **{course_code}**: Focus needed - completion rate below 50%\\n"
            elif not data['last_activity'] or (datetime.now() - data['last_activity']).days > 7:
                content += f"- **{course_code}**: Resume activity - no updates in over a week\\n"
        
        content += "\\n## 🎯 Next Week Goals\\n\\n"
        content += "- [ ] Complete pending assignments\\n"
        content += "- [ ] Update course notes\\n"
        content += "- [ ] Work on portfolio items\\n"
        content += "- [ ] Review and improve documentation\\n"
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Progress report generated: {report_path}")
        return report_path

if __name__ == '__main__':
    tracker = CourseProgressTracker()
    progress = tracker.analyze_course_progress()
    report_path = tracker.generate_progress_report(progress)
```

---

## 🚀 **Deployment Instructions**

### **Step 1: Enable GitHub Actions**

1. **Navigate** to repository Settings
2. **Actions** → General
3. **Allow all actions and reusable workflows**
4. **Save** settings

### **Step 2: Create Workflow Files**

1. **Create** `.github/workflows/` directory
2. **Add each workflow file** listed above
3. **Commit** with message: `[Setup] Add GitHub Actions automation workflows`

### **Step 3: Create Automation Scripts**

1. **Create** `automation/scripts/` directory
2. **Add Python scripts** for portfolio and progress tracking
3. **Test scripts locally** before committing

### **Step 4: Configure Secrets (if needed)**

1. **Settings** → Secrets and variables → Actions
2. **Add repository secrets** for external integrations
3. **Configure environment variables** for automation

### **Step 5: Test Automation**

1. **Actions** tab → Select workflow
2. **Run workflow** manually using "workflow_dispatch"
3. **Verify** automation creates issues/updates correctly
4. **Monitor** scheduled runs for proper execution

---

## 📈 **Expected Results**

### **Weekly Automation**
- **5 new issues** created every Monday (one per course)
- **Consistent formatting** using course code standards
- **Automated labeling** for easy filtering and organization

### **Portfolio Updates**
- **Real-time portfolio updates** when new projects are added
- **Professional portfolio README** maintenance
- **Achievement tracking** across all courses

### **Progress Monitoring**
- **Weekly progress reports** every Friday
- **Milestone reminders** for important deadlines
- **Data-driven insights** for academic improvement

### **Feedback Collection**
- **Monthly feedback discussions** for portfolio review
- **Systematic testimonial gathering** for professional development
- **Community engagement** through structured feedback processes

---

**Status**: Ready for deployment  
**Next Step**: Begin workflow file creation in GitHub repository  
**Support**: Reference main GitHub Web Development Guide for repository setup
