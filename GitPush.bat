@echo off
set /p tags=Input tag name to push(latest):
if "%tags%"=="" (
    git add -A && git commit -a -m "GitPush" && git push -u origin master
) else (
    git add -A && git commit -a -m "Version %tags%" && git tag -f %tags% -m "By GitPush." && git push -u origin master %tags% -f
)