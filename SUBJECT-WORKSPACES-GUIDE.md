# Independent Subject Workspaces Guide

## 🎯 Problem Solved
You wanted **separate VS Code windows for each subject** where:
- Each subject has its own independent chatbox/Copilot context
- Files from other subjects are hidden and cannot be accidentally accessed
- Each workspace is locked to its specific course directory

## 🚀 How to Use

### Method 1: Double-Click Workspace Files
Navigate to your main folder and double-click any of these files:
- `MO-IT103-Computer-Programming-2.code-workspace` 
- `MO-IT143-Ethical-Hacking.code-workspace`
- `MO-IT147-Information-Assurance-Security-1.code-workspace`
- `MO-IT148-Applications-Development-Emerging-Technologies.code-workspace`
- `MO-IT151-Platform-Technologies.code-workspace`

### Method 2: Use the Launcher (Recommended)
1. Double-click `launch-subject.bat`
2. Choose the subject number (1-5)
3. VS Code opens with **ONLY** that subject's files visible

### Method 3: Command Line
```bash
# Open specific subject
code "MO-IT103-Computer-Programming-2.code-workspace"
code "MO-IT143-Ethical-Hacking.code-workspace"
# etc.

# Open all subjects at once (5 separate windows)
code "MO-IT103-Computer-Programming-2.code-workspace"
code "MO-IT143-Ethical-Hacking.code-workspace"
code "MO-IT147-Information-Assurance-Security-1.code-workspace"
code "MO-IT148-Applications-Development-Emerging-Technologies.code-workspace"
code "MO-IT151-Platform-Technologies.code-workspace"
```

## 🔒 What Each Subject Workspace Includes

### Visible Folders
- **📚 [Subject Name]** - Only this subject's files (assignments, projects, notes, portfolio-items)
- **📁 Templates** - Shared templates for file creation
- **💼 Portfolio Items** - This subject's portfolio items only

### Hidden/Excluded
- ❌ All other subject folders are **completely hidden**
- ❌ Cannot search or access files from other subjects
- ❌ File explorer shows **only** the current subject

## 🤖 Independent Copilot Context

Each workspace has its own:
- **Separate chat history** - Conversations don't mix between subjects
- **Subject-specific context** - Copilot knows only about the current subject
- **Isolated file access** - Cannot accidentally reference other subjects' files
- **Focused assistance** - AI help is specific to the current course

## 📁 Directory Isolation

When you open `MO-IT103-Computer-Programming-2.code-workspace`:
```
✅ Visible:
├── 📚 MO-IT103 - Computer Programming 2/
│   ├── assignments/
│   ├── projects/
│   ├── notes/
│   └── portfolio-items/
├── 📁 Templates/
└── 💼 Portfolio Items/ (MO-IT103 only)

❌ Hidden:
├── MO-IT143-Ethical-Hacking/          (EXCLUDED)
├── MO-IT147-Information-Assurance/    (EXCLUDED)  
├── MO-IT148-Applications-Development/ (EXCLUDED)
└── MO-IT151-Platform-Technologies/    (EXCLUDED)
```

## 💡 Benefits

1. **No Cross-Contamination** - Cannot accidentally edit wrong subject's files
2. **Focused Work Environment** - Only see files relevant to current subject
3. **Separate AI Contexts** - Each subject has independent Copilot conversations
4. **Better Organization** - Cleaner file explorer with less clutter
5. **Subject-Specific Settings** - Each workspace can have different themes/settings

## 🔧 Workflow Example

**Studying Computer Programming (MO-IT103):**
1. Double-click `MO-IT103-Computer-Programming-2.code-workspace`
2. VS Code opens showing **only** MO-IT103 files
3. Chat with Copilot about programming concepts
4. Create assignments using templates
5. All work stays in MO-IT103 context

**Switch to Ethical Hacking (MO-IT143):**
1. Double-click `MO-IT143-Ethical-Hacking.code-workspace` 
2. **New VS Code window** opens with **only** MO-IT143 files
3. **Fresh Copilot chat** specific to ethical hacking
4. Cannot see or access programming files
5. Completely separate work environment

## 🎯 Perfect Solution For Your Needs

✅ **Separate chatbox per subject** - Each workspace = independent Copilot context  
✅ **Cannot change file directory** - Other subjects are completely hidden  
✅ **Independent windows** - Each subject opens in its own VS Code instance  
✅ **No file mixing** - Impossible to accidentally work on wrong subject  
✅ **Clean workspace** - Only see files relevant to current subject  

Your original problem is now **completely solved**! 🎉
