# GitHub Actions Quick Deploy Script

## TERM-3 SY-2024-25 | One-Click Automation Setup

**Purpose**: Copy-paste GitHub Actions workflows for immediate deployment  
**Created**: June 3, 2025  
**Status**: Production-ready workflows  

---

## 🚀 **WORKFLOW 1: Weekly Task Generator**

**File Path**: `.github/workflows/weekly-tasks.yml`

```yaml
name: Weekly Academic Tasks
on:
  schedule:
    - cron: '0 9 * * MON'
  workflow_dispatch:

jobs:
  create-weekly-tasks:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Create IT103 Task
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((Date.now() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT103] Week ${week} - Programming Assignment`,
              body: `## Computer Programming 2 - Week ${week}\n\n**Due**: Next Monday\n\n### Tasks:\n- [ ] Review weekly modules\n- [ ] Complete programming exercises\n- [ ] Update portfolio`,
              labels: ['IT103', 'assignment']
            });
            
      - name: Create IT143 Task
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((Date.now() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT143] Week ${week} - Ethical Hacking Lab`,
              body: `## Ethical Hacking - Week ${week}\n\n**Due**: Next Monday\n\n### Tasks:\n- [ ] Security lab exercises\n- [ ] Document findings\n- [ ] Update security portfolio`,
              labels: ['IT143', 'assignment']
            });

      - name: Create IT147 Task
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((Date.now() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT147] Week ${week} - Security Assessment`,
              body: `## Information Assurance Security - Week ${week}\n\n**Due**: Next Monday\n\n### Tasks:\n- [ ] Risk assessment exercises\n- [ ] Security policy review\n- [ ] Update compliance portfolio`,
              labels: ['IT147', 'assignment']
            });

      - name: Create IT148 Task
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((Date.now() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT148] Week ${week} - Emerging Tech Project`,
              body: `## Applications Development Emerging Technologies - Week ${week}\n\n**Due**: Next Monday\n\n### Tasks:\n- [ ] Technology research\n- [ ] Development exercises\n- [ ] Innovation portfolio update`,
              labels: ['IT148', 'assignment']
            });

      - name: Create IT151 Task
        uses: actions/github-script@v7
        with:
          script: |
            const week = Math.ceil((Date.now() - new Date('2025-01-01')) / (7 * 24 * 60 * 60 * 1000));
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `[IT151] Week ${week} - Platform Implementation`,
              body: `## Platform Technologies - Week ${week}\n\n**Due**: Next Monday\n\n### Tasks:\n- [ ] Platform exercises\n- [ ] Architecture design\n- [ ] Platform portfolio update`,
              labels: ['IT151', 'assignment']
            });
```

---

## 🚀 **WORKFLOW 2: Portfolio Auto-Update**

**File Path**: `.github/workflows/portfolio-update.yml`

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
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
          
      - name: Create Portfolio Scanner
        run: |
          cat > portfolio_scanner.py << 'EOF'
          import os
          import re
          from datetime import datetime
          
          def scan_portfolio_items():
              portfolio_items = []
              courses_dir = 'courses'
              
              if not os.path.exists(courses_dir):
                  return portfolio_items
                  
              for course in os.listdir(courses_dir):
                  course_path = os.path.join(courses_dir, course)
                  portfolio_path = os.path.join(course_path, 'portfolio-items')
                  
                  if os.path.exists(portfolio_path):
                      for item in os.listdir(portfolio_path):
                          if item.endswith('.md'):
                              item_path = os.path.join(portfolio_path, item)
                              with open(item_path, 'r', encoding='utf-8') as f:
                                  content = f.read()
                                  
                              # Extract title
                              title_match = re.search(r'# Portfolio Item: (.+)', content)
                              title = title_match.group(1) if title_match else item.replace('.md', '')
                              
                              # Extract course
                              course_match = re.search(r'\*\*Course\*\*: (.+)', content)
                              course_name = course_match.group(1) if course_match else course
                              
                              portfolio_items.append({
                                  'title': title,
                                  'course': course_name,
                                  'file': item_path
                              })
              
              return portfolio_items
          
          def update_portfolio_readme():
              items = scan_portfolio_items()
              
              readme_content = f"""# Professional Portfolio
          
          ## BS IT Network & Cybersecurity Student
          
          **Last Updated**: {datetime.now().strftime('%B %d, %Y')}
          **Portfolio Items**: {len(items)}
          
          ### 🏆 Featured Projects
          
          """
              
              # Group by course
              courses = {}
              for item in items:
                  course = item['course'].split(' - ')[0] if ' - ' in item['course'] else item['course']
                  if course not in courses:
                      courses[course] = []
                  courses[course].append(item)
              
              for course, course_items in courses.items():
                  readme_content += f"#### {course}\n"
                  for item in course_items:
                      readme_content += f"- [{item['title']}]({item['file']})\n"
                  readme_content += "\n"
              
              readme_content += f"""
          ### 📊 Progress Summary
          
          - **Total Courses**: {len(courses)}
          - **Portfolio Items**: {len(items)}
          - **Last Updated**: {datetime.now().strftime('%B %d, %Y')}
          
          ### 🔧 Technical Skills Demonstrated
          
          - Programming and Software Development
          - Cybersecurity and Ethical Hacking
          - Information Security and Risk Assessment
          - Emerging Technologies Implementation
          - Platform Technologies and Architecture
          """
              
              os.makedirs('portfolio', exist_ok=True)
              with open('portfolio/README.md', 'w', encoding='utf-8') as f:
                  f.write(readme_content)
          
          if __name__ == "__main__":
              update_portfolio_readme()
              print("Portfolio updated successfully!")
          EOF
          
      - name: Run Portfolio Scanner
        run: python portfolio_scanner.py
        
      - name: Commit Portfolio Updates
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "Portfolio Auto-Update"
          git add portfolio/README.md
          if git diff --staged --quiet; then
            echo "No portfolio changes to commit"
          else
            git commit -m "🤖 Auto-update portfolio summary"
            git push
          fi
```

---

## 🚀 **WORKFLOW 3: Progress Tracker**

**File Path**: `.github/workflows/progress-tracker.yml`

```yaml
name: Academic Progress Tracker
on:
  schedule:
    - cron: '0 18 * * FRI'
  workflow_dispatch:

jobs:
  track-progress:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Generate Progress Report
        uses: actions/github-script@v7
        with:
          script: |
            const { data: issues } = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              state: 'all',
              labels: 'assignment',
              per_page: 100
            });
            
            const courses = ['IT103', 'IT143', 'IT147', 'IT148', 'IT151'];
            let progressReport = '# Weekly Progress Report\n\n';
            progressReport += `**Generated**: ${new Date().toLocaleDateString()}\n\n`;
            
            for (const course of courses) {
              const courseIssues = issues.filter(issue => 
                issue.labels.some(label => label.name === course)
              );
              
              const completed = courseIssues.filter(issue => issue.state === 'closed').length;
              const total = courseIssues.length;
              const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
              
              progressReport += `## ${course}\n`;
              progressReport += `- **Completed**: ${completed}/${total} (${percentage}%)\n`;
              progressReport += `- **Recent Activity**: ${courseIssues.slice(0, 3).map(issue => 
                `[${issue.title}](${issue.html_url})`
              ).join(', ')}\n\n`;
            }
            
            // Create or update progress issue
            const progressTitle = `📊 Weekly Progress Report - ${new Date().toLocaleDateString()}`;
            
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: progressTitle,
              body: progressReport,
              labels: ['documentation', 'progress']
            });
```

---

## 🚀 **WORKFLOW 4: Milestone Reminders**

**File Path**: `.github/workflows/milestone-reminders.yml`

```yaml
name: Academic Milestone Reminders
on:
  schedule:
    - cron: '0 8 * * MON,WED,FRI'
  workflow_dispatch:

jobs:
  milestone-check:
    runs-on: ubuntu-latest
    steps:
      - name: Check Upcoming Deadlines
        uses: actions/github-script@v7
        with:
          script: |
            const { data: issues } = await github.rest.issues.listForRepo({
              owner: context.repo.owner,
              repo: context.repo.repo,
              state: 'open',
              labels: 'assignment',
              per_page: 100
            });
            
            const today = new Date();
            const threeDaysFromNow = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
            
            const upcomingIssues = issues.filter(issue => {
              const dueDateMatch = issue.body.match(/\*\*Due\*\*:\s*(.+)/i);
              if (dueDateMatch) {
                const dueDate = new Date(dueDateMatch[1]);
                return dueDate >= today && dueDate <= threeDaysFromNow;
              }
              return false;
            });
            
            if (upcomingIssues.length > 0) {
              let reminderBody = '## 🚨 Upcoming Assignment Deadlines\n\n';
              reminderBody += '**Next 3 Days:**\n\n';
              
              upcomingIssues.forEach(issue => {
                reminderBody += `- [${issue.title}](${issue.html_url})\n`;
              });
              
              await github.rest.issues.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                title: '⏰ Assignment Deadline Reminder',
                body: reminderBody,
                labels: ['reminder', 'deadline']
              });
            }
```

---

## 🚀 **WORKFLOW 5: Feedback Collection**

**File Path**: `.github/workflows/feedback-collection.yml`

```yaml
name: Feedback Collection
on:
  workflow_dispatch:
    inputs:
      course_code:
        description: 'Course code (IT103, IT143, etc.)'
        required: true
        type: string
      project_title:
        description: 'Project or assignment title'
        required: true
        type: string

jobs:
  create-feedback-request:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Create Feedback Request Issue
        uses: actions/github-script@v7
        with:
          script: |
            const courseCode = '${{ github.event.inputs.course_code }}';
            const projectTitle = '${{ github.event.inputs.project_title }}';
            
            const feedbackBody = `## Feedback Request: ${projectTitle}
            
            **Course**: ${courseCode}
            **Project**: ${projectTitle}
            **Date**: ${new Date().toLocaleDateString()}
            
            ### Requesting Feedback On:
            - [ ] Technical implementation
            - [ ] Professional presentation
            - [ ] Portfolio value
            - [ ] Learning demonstration
            
            ### Feedback Template:
            
            **Strengths:**
            - [What worked well]
            
            **Areas for Improvement:**
            - [Suggestions for enhancement]
            
            **Professional Development:**
            - [Portfolio and career relevance]
            
            **Overall Assessment:**
            - [General feedback and recommendations]
            
            ### Instructions:
            Please provide constructive feedback using the template above. This feedback will be incorporated into the portfolio documentation and professional development tracking.
            `;
            
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `📝 Feedback Request: [${courseCode}] ${projectTitle}`,
              body: feedbackBody,
              labels: [courseCode.toLowerCase(), 'feedback', 'portfolio']
            });
```

---

## 📋 **QUICK DEPLOYMENT CHECKLIST**

### **Step 1: Create Workflow Directory**
1. In your GitHub repository, create: `.github/workflows/`
2. This creates the directory structure needed for GitHub Actions

### **Step 2: Add Workflows (5 minutes each)**
For each workflow above:
1. Click "Create new file" in `.github/workflows/`
2. Name the file (e.g., `weekly-tasks.yml`)
3. Copy-paste the YAML content
4. Commit with message: `Add [workflow name] automation`

### **Step 3: Configure Repository Labels**
Create these labels in Issues → Labels:
- `IT103`, `IT143`, `IT147`, `IT148`, `IT151` (course codes)
- `assignment`, `project`, `portfolio`, `feedback`, `documentation`
- `reminder`, `deadline`, `progress`

### **Step 4: Test Workflows**
1. Go to Actions tab
2. Click "Weekly Academic Tasks"
3. Click "Run workflow" to test
4. Verify issues are created correctly

### **Step 5: Enable Scheduled Execution**
Workflows will automatically run on schedule:
- **Weekly Tasks**: Every Monday at 9 AM
- **Progress Tracker**: Every Friday at 6 PM
- **Milestone Reminders**: Monday, Wednesday, Friday at 8 AM

---

## 🔒 **PRIVATE MATERIALS INTEGRATION**

### **Step 6: Set Up Private Learning Materials Repository**

#### **Create Private Repository**
1. **New Repository**: Click "New" in GitHub
2. **Repository Configuration**:
   ```
   Name: TERM-3_SY-2024-25-Private-Materials
   Description: Private learning materials - School regulation compliance
   Visibility: ✅ Private
   Initialize: ✅ Add README file
   ```

#### **Configure Private Repository Structure**
**Create these directories and files**:

1. **Main README.md**:
   ```markdown
   # TERM-3 SY-2024-25 Private Learning Materials
   
   **Academic Compliance** - Authorized Access Only
   
   ## Course Structure
   - `MO-IT103/` - Computer Programming 2 materials
   - `MO-IT143/` - Ethical Hacking resources  
   - `MO-IT147/` - Information Assurance materials
   - `MO-IT148/` - Applications Development resources
   - `MO-IT151/` - Platform Technologies content
   
   ## Access Control
   - Institution-compliant permissions
   - Invitation-only for authorized collaborators
   - Contact: [your-email] for access requests
   ```

2. **Course Directory READMEs** (Create 5 files):
   ```markdown
   # MO-IT103 Private Learning Materials
   
   ## Content Organization
   - lecture-notes/
   - study-guides/
   - textbook-materials/
   - assignment-solutions/
   - supplementary-resources/
   
   **Access**: Authorized collaborators only
   ```

#### **Link to Main Repository**
In your **main public repository**, update `learning-materials-access.md`:

```markdown
## 🔗 **Private Repository Integration**

**Repository**: `TERM-3_SY-2024-25-Private-Materials`
**Access**: Git submodule integration for authorized users
**Setup**: `git submodule update --init --recursive`

### **Dual Repository Benefits**
- ✅ School regulation compliance
- ✅ Professional access control demonstration  
- ✅ Seamless workflow integration
- ✅ Portfolio visibility with academic privacy
```

### **Step 7: Automated Privacy Compliance Workflow**

**File Path**: `.github/workflows/privacy-compliance.yml`

```yaml
name: Privacy Compliance Check
on:
  push:
    paths:
      - 'courses/**'
  pull_request:
    paths:
      - 'courses/**'

jobs:
  check-content:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Scan for Private Content
        run: |
          # Check for common private content indicators
          PRIVATE_INDICATORS=(
            "exam solution"
            "test answer"
            "instructor only"
            "do not share"
            "confidential"
          )
          
          for indicator in "${PRIVATE_INDICATORS[@]}"; do
            if grep -r -i "$indicator" courses/; then
              echo "⚠️ Potential private content detected: $indicator"
              echo "Please review content for school regulation compliance"
              exit 1
            fi
          done
          
          echo "✅ No private content indicators detected"
          
      - name: Create Compliance Report
        if: github.event_name == 'push'
        uses: actions/github-script@v7
        with:
          script: |
            const report = `## 🔒 Privacy Compliance Report
            
            **Date**: ${new Date().toLocaleDateString()}
            **Commit**: ${context.sha.substring(0, 7)}
            
            ### ✅ Compliance Status: VERIFIED
            
            - Content scanned for private material indicators
            - School regulation compliance maintained
            - Public repository safe for portfolio sharing
            
            ### 📋 Content Distribution
            - **Public**: Project code, portfolio items, documentation
            - **Private**: Learning materials in separate repository
            - **Access Control**: Institution-compliant permissions
            `;
            
            // Create issue for significant changes
            if (context.payload.commits.length > 5) {
              await github.rest.issues.create({
                owner: context.repo.owner,
                repo: context.repo.repo,
                title: '🔒 Privacy Compliance Review',
                body: report,
                labels: ['compliance', 'privacy']
              });
            }
```

---

## 🎯 **AUTOMATION BENEFITS**

### **Immediate Value**
- ✅ Automatic weekly task creation for all 5 courses
- ✅ Real-time portfolio updates when content changes
- ✅ Weekly progress tracking and reporting
- ✅ Deadline reminders and milestone alerts
- ✅ Systematic feedback collection process

### **Professional Development**
- ✅ Demonstrates automation and DevOps skills
- ✅ Shows systematic approach to project management
- ✅ Provides consistent documentation and tracking
- ✅ Creates professional portfolio maintenance
- ✅ Enables efficient collaboration and feedback

### **Academic Excellence**
- ✅ Never miss assignment deadlines
- ✅ Consistent progress tracking across all courses
- ✅ Automated portfolio development
- ✅ Professional project documentation
- ✅ Systematic feedback integration

**🚀 READY FOR IMMEDIATE DEPLOYMENT**

Copy-paste these workflows into your GitHub repository for instant academic automation!
