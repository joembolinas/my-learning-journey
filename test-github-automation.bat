@echo off
echo Testing GitHub issue creation...
gh issue create --title "🧪 Test Issue - GitHub Automation Testing" --body "This is a test issue to verify GitHub automation is working after the submodule fix.

## Test Details
- Created: %date% %time%
- Purpose: Validate GitHub Actions workflows
- Status: Testing automation

This issue can be closed after verification." --label "test,automation" --assignee "@me"

echo Test completed!
pause
