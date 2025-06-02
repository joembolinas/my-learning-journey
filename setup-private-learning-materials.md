# Setup Guide: Private Learning Materials

## Step 1: Create Private Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name: `TERM3-Learning-Materials-Private`
4. Set as **Private**
5. Initialize with README
6. Clone to local machine

## Step 2: Move Learning Materials
```bash
# Navigate to your main repo
cd "C:\Users\ADMIN\Desktop\School File\TERM-3_SY-2024-25"

# Create the private repo structure
mkdir ..\TERM3-Learning-Materials-Private\MO-IT103
mkdir ..\TERM3-Learning-Materials-Private\MO-IT143
mkdir ..\TERM3-Learning-Materials-Private\MO-IT147
mkdir ..\TERM3-Learning-Materials-Private\MO-IT148
mkdir ..\TERM3-Learning-Materials-Private\MO-IT151

# Move any existing learning materials
# (if they exist)
```

## Step 3: Add as Submodule
```bash
# In your main repo directory
git submodule add https://github.com/yourusername/TERM3-Learning-Materials-Private.git learning-materials-private

# Update .gitmodules file will be created automatically
```

## Step 4: Update Main Repo Structure
Create symbolic links or references to private materials:

```bash
# Windows PowerShell (Run as Administrator)
New-Item -ItemType Junction -Path "courses\MO-IT103-Computer-Programming-2\learning-materials" -Target "..\..\..\learning-materials-private\MO-IT103"
New-Item -ItemType Junction -Path "courses\MO-IT143-Ethical-Hacking\learning-materials" -Target "..\..\..\learning-materials-private\MO-IT143"
New-Item -ItemType Junction -Path "courses\MO-IT147-Information-Assurance-Security-1\learning-materials" -Target "..\..\..\learning-materials-private\MO-IT147"
New-Item -ItemType Junction -Path "courses\MO-IT148-Applications-Development-Emerging-Tech\learning-materials" -Target "..\..\..\learning-materials-private\MO-IT148"
New-Item -ItemType Junction -Path "courses\MO-IT151-Platform-Technologies\learning-materials" -Target "..\..\..\learning-materials-private\MO-IT151"
```

## Step 5: Update .gitignore
Add to your main repo's .gitignore:
```
# Private learning materials (handled by submodule)
learning-materials-private/
**/learning-materials/
!**/learning-materials/.gitkeep
```

## Step 6: Create Public Placeholders
```markdown
# Create in each course's learning-materials folder
# File: courses/MO-IT103-Computer-Programming-2/learning-materials/.gitkeep

# Learning Materials - Private Content
# See: https://github.com/yourusername/TERM3-Learning-Materials-Private
# Contact: [your-email] for authorized access
```

## Step 7: Commit Changes
```bash
# Commit the submodule addition
git add .gitmodules learning-materials-private
git commit -m "Add private learning materials submodule"
git push origin main
```

## For Collaborators Access:
1. Clone main public repo normally
2. Request access to private learning materials repo
3. Initialize submodule: `git submodule update --init --recursive`
