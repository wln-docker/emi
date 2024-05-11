FROM ccr.ccs.tencentyun.com/wlniao/dotnet:8.0.4-debian
COPY . /wln
COPY ./fonts/* /usr/share/fonts/truetype/noto
WORKDIR /wln
CMD ["dotnet", "emi.dll"]