#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WirelessAgent项目展示网站配置文件
"""

import os

class Config:
    """基础配置类"""
    # 应用基础配置
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'wireless-agent-demo-2025'
    
    # 项目信息
    PROJECT_NAME = "WIRELESSBENCH"
    PROJECT_TITLE = "Evaluating AI Agents in Domain-Specific Telecommunication Tasks"
    PROJECT_DESCRIPTION = "利用先进的大语言模型技术，实现无线网络的智能化管理和优化"
    
    # 论文信息
    PAPER_TITLE = "WIRELESSBENCH: Evaluating AI Agents in Domain-Specific Telecommunication Tasks"
    PAPER_JOURNAL = "China Communications 2025"
    PAPER_ARXIV = "2409.07964"
    PAPER_URL = "https://arxiv.org/abs/2409.07964"
    
    # GitHub信息
    GITHUB_URL = "https://github.com/logiczZXue/website-design"
    
    # 数据集信息
    DATASET_NAME = "WCHW"
    DATASET_TEST_SIZE = 401
    DATASET_VALIDATION_SIZE = 89
    
    # 性能指标
    BANDWIDTH_IMPROVEMENT = 44.4
    RESPONSE_TIME_IMPROVEMENT = 70.0
    TEST_ACCURACY = 87.5
    VALIDATION_ACCURACY = 89.2

class DevelopmentConfig(Config):
    """开发环境配置"""
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    """生产环境配置"""
    DEBUG = False
    TESTING = False

class TestingConfig(Config):
    """测试环境配置"""
    DEBUG = True
    TESTING = True

# 配置字典
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}