FROM ccr.ccs.tencentyun.com/wlniao/dotnet:8.0.4-ubuntu
RUN apt update 2>/dev/null \
	&& apt install -y libgdiplus 2>/dev/null \
	&& apt clean \
	&& apt autoremove \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /tmp/*
COPY . /wln
COPY ./fonts/* /usr/share/fonts/truetype/noto
WORKDIR /wln
CMD ["dotnet", "emi.dll"]