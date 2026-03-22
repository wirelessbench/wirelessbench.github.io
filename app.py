#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WIRELESSBENCH项目展示网站
基于Flask的静态网站生成器
"""

from flask import Flask, render_template, jsonify
import json
import os
from config import config

# 创建Flask应用
def create_app(config_name=None):
    """应用工厂函数"""
    app = Flask(__name__)
    
    # 加载配置
    config_name = config_name or os.environ.get('FLASK_ENV', 'default')
    app.config.from_object(config[config_name])
    
    return app

app = create_app()

@app.route('/')
def index():
    """主页"""
    return render_template('index.html')

@app.route('/api/dataset-stats')
def dataset_stats():
    """获取数据集基本统计信息"""
    stats = {
        'total_questions': 490,
        'domains_covered': 6,
        'coverage_rate': 100
    }
    return jsonify(stats)

@app.route('/api/performance-data')
def performance_data():
    """获取性能对比数据"""
    data = {
        'bandwidth_utilization': {
            'traditional': 65.2,
            'wireless_agent': 94.1,
            'improvement': 44.4
        },
        'response_time': {
            'traditional': 150,
            'wireless_agent': 45,
            'improvement': 70
        },
        'accuracy': {
            'test_set': 87.5,
            'validation_set': 89.2
        }
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5001)