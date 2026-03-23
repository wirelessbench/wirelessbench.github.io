// WirelessAgent项目展示网站JavaScript功能

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 防止重复初始化
    if (window.wirelessAgentInitialized) {
        return;
    }
    window.wirelessAgentInitialized = true;
    
    // 初始化所有功能
    initializeCharts();
    initializeScrollEffects();
    initializeSmoothScroll();
    initializeImageFeatures();
    initializeLazyLoading();
    initDynamicIsland();
});

// 初始化图表
function initializeCharts() {
    // 初始化数据集统计图表
    initDatasetStatsCharts();
    // 初始化性能对比图表
    initPerformanceCharts();
    // 初始化结语图表
    initConclusionCharts();
}

// 初始化数据集统计图表
function initDatasetStatsCharts() {
    // 样本分布图表
    const sampleCtx = document.getElementById('sampleDistributionChart');
    if (sampleCtx) {
        new Chart(sampleCtx, {
            type: 'bar',
            data: {
                labels: ['WCHW', 'WCNS', 'WCMSA'],
                datasets: [
                    {
                        label: '验证集',
                        data: [348, 250, 250],
                        backgroundColor: 'rgba(102, 126, 234, 0.8)',
                        borderColor: 'rgba(102, 126, 234, 1)',
                        borderWidth: 2
                    },
                    {
                        label: '测试集',
                        data: [1044, 750, 750],
                        backgroundColor: 'rgba(118, 75, 162, 0.8)',
                        borderColor: 'rgba(118, 75, 162, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: { size: 12 },
                            padding: 15
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: { size: 11 }
                        }
                    },
                    x: {
                        ticks: {
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }

    // 推理链长度对比图表
    const reasoningCtx = document.getElementById('reasoningChainChart');
    if (reasoningCtx) {
        new Chart(reasoningCtx, {
            type: 'line',
            data: {
                labels: ['WCHW', 'WCNS', 'WCMSA', '平均'],
                datasets: [{
                    label: '推理链长度',
                    data: [4.2, 3, 5.5, 4.1],
                    backgroundColor: 'rgba(25, 135, 84, 0.2)',
                    borderColor: 'rgba(25, 135, 84, 1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: 'rgba(25, 135, 84, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: { size: 12 },
                            padding: 15
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6,
                        ticks: {
                            font: { size: 11 },
                            stepSize: 1
                        }
                    },
                    x: {
                        ticks: {
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }
}

// 初始化性能对比图表
function initPerformanceCharts() {
    // 性能雷达图
    const radarCtx = document.getElementById('performanceRadarChart');
    if (radarCtx) {
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['WCHW', 'WCNS', 'WCMSA'],
                datasets: [
                    {
                        label: 'GPT-4o',
                        data: [60.32, 72.45, 71.22],
                        backgroundColor: 'rgba(102, 126, 234, 0.2)',
                        borderColor: 'rgba(102, 126, 234, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
                    },
                    {
                        label: 'AFlow',
                        data: [69.92, 76.12, 73.90],
                        backgroundColor: 'rgba(255, 193, 7, 0.2)',
                        borderColor: 'rgba(255, 193, 7, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255, 193, 7, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 193, 7, 1)'
                    },
                    {
                        label: 'WireBench-Ref',
                        data: [81.02, 86.18, 86.72],
                        backgroundColor: 'rgba(40, 167, 69, 0.2)',
                        borderColor: 'rgba(40, 167, 69, 1)',
                        borderWidth: 3,
                        pointBackgroundColor: 'rgba(40, 167, 69, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(40, 167, 69, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: { size: 11 },
                            padding: 12
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            font: { size: 10 }
                        },
                        pointLabels: {
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }

    // 平均性能排名柱状图
    const barCtx = document.getElementById('performanceBarChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Qwen-Turbo', 'ADAS', 'GPT-4o', 'MedPrompt', 'CoT-SC', 'AFlow', 'WireBench-Ref'],
                datasets: [{
                    label: '平均准确率 (%)',
                    data: [62.3, 62.32, 68, 69.1, 69.46, 73.29, 84.64],
                    backgroundColor: [
                        'rgba(244, 67, 54, 0.7)',
                        'rgba(244, 67, 54, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(33, 150, 243, 0.7)',
                        'rgba(40, 167, 69, 0.8)'
                    ],
                    borderColor: [
                        'rgba(244, 67, 54, 1)',
                        'rgba(244, 67, 54, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(33, 150, 243, 1)',
                        'rgba(40, 167, 69, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: { size: 11 }
                        }
                    },
                    y: {
                        ticks: {
                            font: { size: 11 }
                        }
                    }
                }
            }
        });
    }
}

// 性能图表功能已移除，简化展示

// 数据集分布图表
function initDatasetChart() {
    const ctx = document.getElementById('datasetChart');
    if (!ctx) return;

    fetch('/api/dataset-stats')
        .then(response => response.json())
        .then(data => {
            const labels = data.categories.map(cat => cat.name);
            const counts = data.categories.map(cat => cat.count);
            const colors = [
                'rgba(13, 110, 253, 0.8)',   // 蓝色
                'rgba(25, 135, 84, 0.8)',    // 绿色
                'rgba(13, 202, 240, 0.8)',   // 青色
                'rgba(255, 193, 7, 0.8)',    // 黄色
                'rgba(220, 53, 69, 0.8)',    // 红色
                'rgba(108, 117, 125, 0.8)'   // 灰色
            ];

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: counts,
                        backgroundColor: colors,
                        borderColor: colors.map(color => color.replace('0.8', '1')),
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: '题目类型分布',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true,
                                font: {
                                    size: 11
                                }
                            }
                        }
                    },
                    animation: {
                        animateRotate: true,
                        duration: 2000
                    }
                }
            });
        })
        .catch(error => {
            console.error('获取数据集统计失败:', error);
        });
}

// 初始化滚动效果
function initializeScrollEffects() {
    // 创建Intersection Observer来处理元素进入视口的动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.card, .feature-highlight, .arch-component');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 平滑滚动导航
function initializeSmoothScroll() {
    // 为导航链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 考虑固定导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 使用节流优化滚动性能
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            updateActiveNavLink();
        });
    });
}

// 更新活跃的导航链接
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    const indicator = document.querySelector('.nav-indicator');
    
    let currentSection = '';
    const scrollPos = window.scrollY + 150; // 增加偏移量，更早触发切换

    // 从后往前遍历，确保最后的 section 也能被检测到
    const sectionsArray = Array.from(sections);
    for (let i = sectionsArray.length - 1; i >= 0; i--) {
        const section = sectionsArray[i];
        const sectionTop = section.offsetTop;
        
        if (scrollPos >= sectionTop - 200) { // 提前 200px 触发
            currentSection = section.getAttribute('id');
            break;
        }
    }

    let activeLink = null;
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
            activeLink = link;
        }
    });

    // 移动灵动岛到激活的链接位置
    if (activeLink && indicator) {
        moveIndicator(activeLink, indicator);
    }
}

// 移动灵动岛指示器
function moveIndicator(activeLink, indicator) {
    const linkRect = activeLink.getBoundingClientRect();
    const navRect = activeLink.closest('.navbar-nav').getBoundingClientRect();
    
    const left = linkRect.left - navRect.left;
    const width = linkRect.width;
    const top = linkRect.top - navRect.top;
    
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
    indicator.style.top = `${top}px`;
    indicator.classList.add('active');
}

// 初始化灵动岛
function initDynamicIsland() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    const indicator = document.querySelector('.nav-indicator');
    
    if (!indicator) return;
    
    // 点击导航链接时移动灵动岛
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有 active 类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加 active 类到当前链接
            this.classList.add('active');
            // 立即移动灵动岛
            moveIndicator(this, indicator);
        });
    });
    
    // 窗口大小改变时重新定位灵动岛
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const activeLink = document.querySelector('.navbar-nav .nav-link.active');
            if (activeLink && indicator) {
                moveIndicator(activeLink, indicator);
            }
        }, 100);
    });
    
    // 页面加载时初始化灵动岛位置
    setTimeout(() => {
        updateActiveNavLink(); // 使用统一的更新函数
    }, 200);
}

// 工具函数：显示加载状态
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin"></i> 加载中...</div>';
    }
}

// 工具函数：显示错误信息
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="text-center text-danger"><i class="fas fa-exclamation-triangle"></i> ${message}</div>`;
    }
}

// 工具函数：复制文本到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 显示复制成功提示
        showToast('已复制到剪贴板', 'success');
    }).catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败', 'error');
    });
}

// 显示提示消息
function showToast(message, type = 'info') {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'error' ? 'danger' : type} position-fixed`;
    toast.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 250px;';
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    // 3秒后自动移除
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 图片相关功能
function initializeImageFeatures() {
    // 为所有图片添加点击放大功能
    const images = document.querySelectorAll('.card img, .responsive-image');
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            showImageModal(this.src, this.alt);
        });
    });
}

// 显示图片模态框
function showImageModal(src, alt) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <img src="${src}" alt="${alt}">
        <div style="position: absolute; top: 20px; right: 30px; color: white; font-size: 30px; cursor: pointer;">&times;</div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // 点击关闭
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentNode) {
            document.body.removeChild(modal);
        }
    });
}

// 图片懒加载功能
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}


// 初始化结语图表
function initConclusionCharts() {
    // 准确率对比饼图
    const comparisonCtx = document.getElementById('conclusionComparisonChart');
    if (comparisonCtx) {
        new Chart(comparisonCtx, {
            type: 'doughnut',
            data: {
                labels: ['LLM 基线 (62-68%)', 'WireBench-Ref (84.64%)'],
                datasets: [{
                    data: [65, 84.64],
                    backgroundColor: [
                        'rgba(245, 87, 108, 0.8)',
                        'rgba(0, 242, 254, 0.8)'
                    ],
                    borderColor: [
                        'rgba(245, 87, 108, 1)',
                        'rgba(0, 242, 254, 1)'
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: { size: 12 },
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
}
