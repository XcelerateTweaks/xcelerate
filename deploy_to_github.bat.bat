@echo off
REM Change to the directory where your website files are located
cd "C:\Users\admin\Desktop\Xcelerate Website"

REM Check if the directory is a Git repository
if exist .git (
    echo This directory is already a Git repository.
) else (
    REM Initialize a Git repository
    git init
)

REM Add all files to the repository
git add .

REM Commit the changes
git commit -m "Initial commit"

REM Add the remote repository
git remote add origin https://github.com/XcelerateTweaks/xceleratetweaks.git

REM Push the changes to the GitHub repository
git push -u origin master

echo Website has been pushed to GitHub successfully.
pause