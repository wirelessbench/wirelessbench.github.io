@echo off
chcp 65001 >nul
echo ========================================
echo 🚀 WIRELESSBENCH 项目展示网站
echo ========================================
echo.
echo 📋 项目信息:
echo    - Evaluating AI Agents in Telecommunication
echo    - 发表于 China Communications 2025
echo    - arXiv: 2409.07964
echo.
echo 🌐 启动开发服务器...
echo 📍 访问地址: http://localhost:5001
echo 💡 提示: 按 Ctrl+C 停止服务器
echo ========================================
echo.

REM 尝试多种方式启动 Python
python app.py 2>nul
if %errorlevel% neq 0 (
    echo [提示] python 命令不可用，尝试使用 py 命令...
    py app.py 2>nul
    if %errorlevel% neq 0 (
        echo [提示] py 命令不可用，尝试使用 python3 命令...
        python3 app.py 2>nul
        if %errorlevel% neq 0 (
            echo.
            echo [错误] 无法找到 Python 解释器！
            echo.
            echo 请确保已安装 Python 并配置环境变量，或者：
            echo 1. 在 PyCharm 中右键点击 app.py，选择 "Run 'app'"
            echo 2. 或在 PyCharm 的终端中运行: python app.py
            echo.
        )
    )
)

pause