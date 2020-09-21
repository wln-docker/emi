@echo off
set /p tags=请输入当前发布的版本号（latest）：
if "%tags%"=="" (
    git add -A && git commit -a -m "GitPush" && git push -u origin master
) else (
    git add -A && git commit -a -m "Version %tags%" && git tag -f %tags% -m "By GitPush." && git push -u origin master %tags% -f
)