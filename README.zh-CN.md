![SQL Chat banner](https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/banner.webp)

<div align="center">
  <h3>SQL Chat</h3>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsqlchat%2Fsqlchat&env=OPENAI_API_KEY">
    <img src="https://img.shields.io/badge/deploy%20on-Vercel-brightgreen.svg?style=for-the-badge&logo=vercel" alt="vercel">
  </a>
  <p><a href="README.md">English</a> | 中文</p>
</div>

## 介绍

SQL Chat 是一个基于聊天的 SQL 客户端，使用自然语言向数据库提问和查询数据库。

![Screenshot](https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/screenshot1.webp)

![Screenshot](https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/screenshot2.webp)

## Why

随着我们进入 [开发者工具2.0时代](https://www.sequoiacap.com/article/ai-powered-developer-tools/)，使用基于聊天的界面重建现有工具的机会非常大。SQL Client 也不例外。与在许多 UI 控件之间导航不同，基于聊天的界面更加直观。当然，前提是那可行，而我们的目标就是提供这种体验。

## How

SQL Chat 是由 [Next.js](https://nextjs.org/) 构建的，它支持以下数据库，并将随着时间的推移支持更多:

- MySQL
- PostgreSQL
- MSSQL
- TiDB Cloud

## 数据保密

- 所有数据库连接配置都本地存储在浏览器中，您也可以访问设置到清除数据。

- 只有数据库模式提供给 OpenAI API，表数据不会提供给 OpenAI API。

- 如果使用 [sqlchat.ai](https://sqlchat.ai), 它会记录下这些匿名对话。

## IP 白名单

如果使用 [sqlchat.ai](https://sqlchat.ai) 连接数据库，则需要在数据库白名单 I P 中添加0.0.0.0(允许所有连接)。因为 sqlchat.ai 托管在 [Vercel](https://vercel.com/) 上 [使用动态 IP](https://vercel.com/guides/how-to-allowlist-deployment-ip-address)。如果这是一个问题，请考虑下面的自主机选项。

## 使用 Docker 自托管

```bash
docker run --name sqlchat --platform linux/amd64 -p 3000:3000 sqlchat/sqlchat
```

您可以设置以下环境变量来定制部署:

- `OPENAI_API_KEY`: OpenAI API 密钥，从 [here](https://beta.openai.com/docs/developer-quickstart/api-keys) 获取。
- `OPENAI_API_ENDPOINT`: OpenAI API 端点，默认为 `https://api.openai.com`。

```bash
docker run --name sqlchat --platform linux/amd64 --env OPENAI_API_KEY=xxx --env OPENAI_API_ENDPOINT=yyy -p 3000:3000 sqlchat/sqlchat
```

## 本地开发环境

1. 复制示例环境变量文件;

   ```bash
   cp .env.example .env
   ```

2. 将您的 [API密钥](https://platform.openai.com/account/api-keys) 和 `OpenAI API` 端点(可选)添加到新创建的 `.env` 文件;

3. 安装依赖项并启动开发服务器;

   ```bash
   pnpm i && pnpm dev
   ```

### 数据库安装

1. 安装依赖

   ```bash
   pnpm i
   ```

2. 从模型生成 `prisma` 客户端

   ```bash
   pnpm prisma generate
   ```

3. 迁移 schema

   ```bash
   pnpm prisma migrate dev
   ```

4. 添加初始的数据

   ```bash
   pnpm prisma db seed
   ```

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=sqlchat/sqlchat&type=Date)](https://star-history.com/#sqlchat/sqlchat&Date)

## 社区

[![Hang out on Discord](https://img.shields.io/badge/%20-Hang%20out%20on%20Discord-5865F2?style=for-the-badge&logo=discord&labelColor=EEEEEE)](https://discord.gg/z6kakemDjm)

[![Follow us on Twitter](https://img.shields.io/badge/Follow%20us%20on%20Twitter-1DA1F2?style=for-the-badge&logo=twitter&labelColor=EEEEEE)](https://twitter.com/Bytebase)

<img width="256" src="https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/wechat-qrcode.webp" alt="sqlchat">

## 赞助商

<p>
  <a href="https://www.bytebase.com">
    <img src="https://raw.githubusercontent.com/sqlchat/sqlchat/main/public/bytebase.webp" width=300>
  </a>
</p>

## 许可

本项目使用 BSL 许可证。请参阅 [LICENSE](LICENSE) 文件以获取完整的许可文本。

## 常见问题

<details><summary>如何自托管 SQL Chat?</summary>
<p>

- 您可以一键将 `SQLChat` 部署到 `Vercel`

  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsqlchat%2Fsqlchat&env=OPENAI_API_KEY"><img src="https://img.shields.io/badge/deploy%20on-Vercel-brightgreen.svg?style=for-the-badge&logo=vercel" alt="vercel"></a>

- 您可以在几秒钟内使用 `Docker` 部署 `SQLChat`

  ```bash
  docker run --name sqlchat --platform linux/amd64 -p 3000:3000 sqlchat/sqlchat
  ```

</p>
</details>

<details><summary>如何使用我的 OpenAI API 密钥？</summary>
<p>

- 您可以在环境变量中设置 `OPENAI_API_KEY`。

  ```bash
  docker run --name sqlchat --platform linux/amd64 --env OPENAI_API_KEY=xxx -p 3000:3000 sqlchat/sqlchat
  ```

- 您可以在设置对话框中设置 `OPENAI_API_KEY`。

</p>
</details>

<details><summary>它总是说我有网络连接问题？</summary>
<p>

请确保您有一个稳定的网络连接，可以访问 OpenAI API 端点。如果您无法访问 OpenAI API 端点，您可以尝试在 UI 或环境变量中设置 `OPENAI_API_ENDPOINT`。

</p>
</details>
