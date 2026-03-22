#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WirelessAgent项目展示网站启动脚本
提供开发和生产环境的启动选项
"""

import os
import sys
from app import app

def main():
    """主函数"""
    print("=" * 60)
    print("🚀 WIRELESSBENCH 项目展示网站")
    print("=" * 60)
    print("📋 项目信息:")
    print("   - Evaluating AI Agents in Telecommunication Tasks")
    print("   - 发表于 China Communications 2025")
    print("   - arXiv: 2409.07964")
    print()
    
    # 检查环境
    print("🔧 环境检查:")
    print(f"   - Python版本: {sys.version.split()[0]}")
    print(f"   - Flask版本: {app.__version__ if hasattr(app, '__version__') else '未知'}")
    print()
    
    # 启动选项
    print("🌐 启动选项:")
    print("   1. 开发模式 (调试开启)")
    print("   2. 生产模式 (性能优化)")
    print()
    
    try:
        choice = input("请选择启动模式 (1/2) [默认: 1]: ").strip()
        if not choice:
            choice = "1"
            
        if choice == "1":
            print("\n🔥 启动开发服务器...")
            print("📍 访问地址: http://localhost:5001")
            print("💡 提示: 按 Ctrl+C 停止服务器")
            print("-" * 60)
            app.run(debug=True, host='0.0.0.0', port=5000)
            
        elif choice == "2":
            print("\n🚀 启动生产服务器...")
            try:
                import gunicorn
                print("📍 访问地址: http://localhost:5001")
                print("💡 提示: 按 Ctrl+C 停止服务器")
                print("-" * 60)
                os.system("gunicorn -w 4 -b 0.0.0.0:5001 app:app")
            except ImportError:
                print("❌ 错误: 未安装gunicorn")
                print("💡 请运行: pip install gunicorn")
                sys.exit(1)
        else:
            print("❌ 无效选择，请输入 1 或 2")
            sys.exit(1)
            
    except KeyboardInterrupt:
        print("\n\n👋 服务器已停止")
        print("感谢使用 WIRELESSBENCH 项目展示网站！")
    except Exception as e:
        print(f"\n❌ 启动失败: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()