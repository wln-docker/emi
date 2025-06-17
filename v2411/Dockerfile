FROM ccr.ccs.tencentyun.com/wlniao/dotnet:8.0.4-debian
COPY . /wln
COPY ./fonts/* /usr/local/share/fonts
WORKDIR /wln
CMD ["dotnet", "emi.dll"]