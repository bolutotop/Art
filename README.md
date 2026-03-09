# ART.SHARE 
> **Live Site:** [https://yuehhhh.top](https://yuehhhh.top)
---

## 0. 准备

- **环境依赖**：服务器已安装 Node.js、npm、PM2 和 Nginx。

## 1. 编译与进程守护 (Next.js + PM2)


```bash
# 1. 拉取最新代码并安装依赖
npm install

# 2. 编译生产环境的硬核代码
npm run build

# 3. 使用 PM2 启动服务，明确指定 3001 端口
pm2 start npm --name "yue-art-3001" -- run start -- -p 3001

# 4. 保存当前 PM2 的进程列表，确保服务器重启后自动拉起
pm2 save
pm2 startup


*执行 `pm2 list`，看到 `yue-art-3001` 亮起绿灯，这一步就算稳了。*

## 2. 网关引流 (Nginx 反向代理)

Nginx 是这台服务器的交警。它负责接管来自公网 80 端口的流量，并精准无误地转发给内部的 `3001` 端口。

创建专属的 Nginx 配置文件：

```bash
sudo nano /etc/nginx/sites-available/yuehhhh.top

```

填入以下代理逻辑（保持请求头的干净与透传）：

```nginx
server {
    listen 80;
    server_name yuehhhh.top www.yuehhhh.top;

    location / {
        proxy_pass http://localhost:32312;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

```

激活配置并重启 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/yuehhhh.top /etc/nginx/sites-enabled/
sudo nginx -t  # 测试语法，确保没手滑拼错字
sudo systemctl reload nginx

```
## 3. HTTPS

```bash
# 确保安装了 Certbot 及 Nginx 插件
sudo apt update
sudo apt install certbot python3-certbot-nginx

# 请求证书并自动修改 Nginx 配置
sudo certbot --nginx -d yuehhhh.top -d www.yuehhhh.top

```

*在交互过程中，输入邮箱、同意条款，并在是否重定向的选项中，选择 **Redirect (强制跳转 HTTPS)**。*

---

## 状态检查与排错

* **查 PM2 状态**：`pm2 status`
* **查 PM2 日志**：`pm2 logs yue-art-3001`
* **查 Nginx 状态**：`sudo systemctl status nginx`


