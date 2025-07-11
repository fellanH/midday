// Dashboard Application JavaScript

class Dashboard {
    constructor() {
        this.currentTheme = 'light';
        this.currentPage = 'overview';
        this.currentChart = 'revenue';
        this.chart = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeChart();
        this.generateMockData();
    }
    
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const page = item.dataset.page;
                this.navigateToPage(page);
            });
        });
        
        // Chart selectors
        const chartSelectors = document.querySelectorAll('.chart-selector');
        chartSelectors.forEach(selector => {
            selector.addEventListener('click', () => {
                const chart = selector.dataset.chart;
                this.switchChart(chart);
            });
        });
        
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        
        // Search button (mock functionality)
        const searchButton = document.querySelector('.search-button');
        searchButton.addEventListener('click', () => this.showSearchModal());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.showSearchModal();
            }
        });
        
        // Period selector for spending widget
        const periodSelector = document.querySelector('.period-selector');
        if (periodSelector) {
            periodSelector.addEventListener('change', (e) => {
                this.updateSpendingData(e.target.value);
            });
        }
    }
    
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        
        // Update chart colors when theme changes
        if (this.chart) {
            this.updateChartTheme();
        }
    }
    
    navigateToPage(pageId) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
        
        // Update page content
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
        
        this.currentPage = pageId;
    }
    
    switchChart(chartType) {
        // Update chart selectors
        document.querySelectorAll('.chart-selector').forEach(selector => {
            selector.classList.remove('active');
        });
        document.querySelector(`[data-chart="${chartType}"]`).classList.add('active');
        
        this.currentChart = chartType;
        this.updateChart();
    }
    
    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
    
    showSearchModal() {
        alert('Search functionality would open here. This is a demo version.');
    }
    
    initializeChart() {
        const ctx = document.getElementById('mainChart').getContext('2d');
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: this.getChartData(),
            options: this.getChartOptions()
        });
    }
    
    getChartData() {
        const data = this.generateChartData(this.currentChart);
        const isDark = this.currentTheme === 'dark';
        
        return {
            labels: data.labels,
            datasets: [{
                label: this.getChartLabel(this.currentChart),
                data: data.values,
                borderColor: isDark ? '#ffffff' : '#000000',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        };
    }
    
    getChartOptions() {
        const isDark = this.currentTheme === 'dark';
        const textColor = isDark ? '#ffffff' : '#000000';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor
                    }
                },
                y: {
                    grid: {
                        color: gridColor
                    },
                    ticks: {
                        color: textColor,
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        };
    }
    
    generateChartData(chartType) {
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let values;
        
        switch(chartType) {
            case 'revenue':
                values = [5000, 6200, 7100, 8000, 9200, 8800, 9500, 10200, 11000, 10800, 12000, 13500];
                break;
            case 'profit':
                values = [1200, 1800, 2100, 2400, 2800, 2600, 2900, 3200, 3500, 3300, 3800, 4200];
                break;
            case 'expense':
                values = [3800, 4400, 5000, 5600, 6400, 6200, 6600, 7000, 7500, 7500, 8200, 9300];
                break;
            case 'burn_rate':
                values = [800, 900, 1000, 1100, 1300, 1200, 1400, 1500, 1600, 1700, 1800, 1900];
                break;
            default:
                values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        
        return { labels, values };
    }
    
    getChartLabel(chartType) {
        const labels = {
            revenue: 'Revenue',
            profit: 'Profit',
            expense: 'Expenses',
            burn_rate: 'Burn Rate'
        };
        return labels[chartType] || 'Data';
    }
    
    updateChart() {
        if (this.chart) {
            this.chart.data = this.getChartData();
            this.chart.options = this.getChartOptions();
            this.chart.update();
        }
    }
    
    updateChartTheme() {
        if (this.chart) {
            this.chart.options = this.getChartOptions();
            this.chart.data = this.getChartData();
            this.chart.update();
        }
    }
    
    updateSpendingData(period) {
        // This would normally fetch new data based on the period
        // For demo purposes, we'll just show different mock data
        const spendingData = this.generateSpendingData(period);
        this.renderSpendingData(spendingData);
    }
    
    generateSpendingData(period) {
        const baseAmounts = {
            last_30d: { software: 2450, marketing: 1850, office: 890 },
            last_3m: { software: 7200, marketing: 5400, office: 2600 },
            last_6m: { software: 14500, marketing: 10800, office: 5200 }
        };
        
        return baseAmounts[period] || baseAmounts.last_30d;
    }
    
    renderSpendingData(data) {
        const spendingList = document.querySelector('.spending-list');
        spendingList.innerHTML = `
            <div class="spending-item">
                <div class="spending-category">
                    <div class="category-color" style="background-color: #3b82f6;"></div>
                    <span>Software</span>
                </div>
                <span class="spending-amount">$${data.software.toLocaleString()}</span>
            </div>
            <div class="spending-item">
                <div class="spending-category">
                    <div class="category-color" style="background-color: #ef4444;"></div>
                    <span>Marketing</span>
                </div>
                <span class="spending-amount">$${data.marketing.toLocaleString()}</span>
            </div>
            <div class="spending-item">
                <div class="spending-category">
                    <div class="category-color" style="background-color: #10b981;"></div>
                    <span>Office</span>
                </div>
                <span class="spending-amount">$${data.office.toLocaleString()}</span>
            </div>
        `;
    }
    
    generateMockData() {
        // Update account balance with random fluctuation
        this.updateAccountBalance();
        
        // Update transaction list periodically
        setInterval(() => {
            this.updateTransactionsList();
        }, 30000); // Update every 30 seconds
        
        // Update account balance periodically
        setInterval(() => {
            this.updateAccountBalance();
        }, 60000); // Update every minute
    }
    
    updateAccountBalance() {
        const baseBalance = 24890.50;
        const fluctuation = (Math.random() - 0.5) * 1000; // Random change up to ±$500
        const newBalance = baseBalance + fluctuation;
        const change = fluctuation > 0 ? `+$${Math.abs(fluctuation).toFixed(2)}` : `-$${Math.abs(fluctuation).toFixed(2)}`;
        const changeClass = fluctuation > 0 ? 'positive' : 'negative';
        
        const balanceElement = document.querySelector('.balance-amount');
        const changeElement = document.querySelector('.balance-change');
        
        if (balanceElement && changeElement) {
            balanceElement.textContent = `$${newBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            changeElement.textContent = `${change} this month`;
            changeElement.className = `balance-change ${changeClass}`;
        }
    }
    
    updateTransactionsList() {
        const transactions = this.generateRandomTransaction();
        const transactionList = document.querySelector('.transaction-list');
        
        if (transactionList) {
            // Add new transaction to the top
            const newTransactionElement = this.createTransactionElement(transactions);
            transactionList.insertBefore(newTransactionElement, transactionList.firstChild);
            
            // Remove last transaction if more than 5
            const transactionItems = transactionList.querySelectorAll('.transaction-item');
            if (transactionItems.length > 5) {
                transactionList.removeChild(transactionItems[transactionItems.length - 1]);
            }
        }
    }
    
    generateRandomTransaction() {
        const transactions = [
            { name: 'Adobe Creative Suite', category: 'Software', amount: -59.99 },
            { name: 'Client Payment', category: 'Income', amount: 2500.00 },
            { name: 'Office Supplies', category: 'Office', amount: -124.50 },
            { name: 'Marketing Campaign', category: 'Marketing', amount: -890.00 },
            { name: 'Freelancer Payment', category: 'Income', amount: 1200.00 },
            { name: 'Cloud Storage', category: 'Software', amount: -29.99 },
            { name: 'Coffee & Snacks', category: 'Office', amount: -45.80 }
        ];
        
        return transactions[Math.floor(Math.random() * transactions.length)];
    }
    
    createTransactionElement(transaction) {
        const div = document.createElement('div');
        div.className = 'transaction-item';
        
        const isPositive = transaction.amount > 0;
        const amountClass = isPositive ? 'positive' : 'negative';
        const amountPrefix = isPositive ? '+' : '';
        
        div.innerHTML = `
            <div class="transaction-info">
                <span class="transaction-name">${transaction.name}</span>
                <span class="transaction-category">${transaction.category}</span>
            </div>
            <span class="transaction-amount ${amountClass}">${amountPrefix}$${Math.abs(transaction.amount).toFixed(2)}</span>
        `;
        
        return div;
    }
    
    // Utility method to format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }
    
    // Utility method to format numbers
    formatNumber(number) {
        return new Intl.NumberFormat('en-US').format(number);
    }
}

// Page-specific functionality
class PageManager {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.setupPageSpecificFeatures();
    }
    
    setupPageSpecificFeatures() {
        this.setupTransactionsPage();
        this.setupInvoicesPage();
        this.setupTrackerPage();
        this.setupCustomersPage();
        this.setupVaultPage();
        this.setupAppsPage();
        this.setupSettingsPage();
    }
    
    setupTransactionsPage() {
        // Add mock transactions table functionality
        // This would be expanded in a real implementation
    }
    
    setupInvoicesPage() {
        // Add mock invoices functionality
        // This would be expanded in a real implementation
    }
    
    setupTrackerPage() {
        // Add time tracking functionality
        // This would be expanded in a real implementation
    }
    
    setupCustomersPage() {
        // Add customer management functionality
        // This would be expanded in a real implementation
    }
    
    setupVaultPage() {
        // Add document vault functionality
        // This would be expanded in a real implementation
    }
    
    setupAppsPage() {
        // Add apps marketplace functionality
        // This would be expanded in a real implementation
    }
    
    setupSettingsPage() {
        // Add settings functionality
        // This would be expanded in a real implementation
    }
}

// Animation utilities
class AnimationUtils {
    static fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = performance.now();
        
        function animate(currentTime) {
            let elapsed = currentTime - start;
            let progress = elapsed / duration;
            
            if (progress > 1) progress = 1;
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    static slideIn(element, direction = 'left', duration = 300) {
        const translateStart = direction === 'left' ? '-100%' : '100%';
        element.style.transform = `translateX(${translateStart})`;
        element.style.display = 'block';
        
        let start = performance.now();
        
        function animate(currentTime) {
            let elapsed = currentTime - start;
            let progress = elapsed / duration;
            
            if (progress > 1) progress = 1;
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const translateCurrent = direction === 'left' ? 
                (-100 + (100 * easeOut)) + '%' : 
                (100 - (100 * easeOut)) + '%';
            
            element.style.transform = `translateX(${translateCurrent})`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.transform = 'translateX(0)';
            }
        }
        
        requestAnimationFrame(animate);
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            pageLoadTime: 0,
            chartRenderTime: 0,
            themeToggleTime: 0
        };
        
        this.measurePageLoad();
    }
    
    measurePageLoad() {
        window.addEventListener('load', () => {
            this.metrics.pageLoadTime = performance.now();
            console.log(`Page loaded in ${this.metrics.pageLoadTime.toFixed(2)}ms`);
        });
    }
    
    measureChartRender(startTime) {
        this.metrics.chartRenderTime = performance.now() - startTime;
        console.log(`Chart rendered in ${this.metrics.chartRenderTime.toFixed(2)}ms`);
    }
    
    measureThemeToggle(startTime) {
        this.metrics.themeToggleTime = performance.now() - startTime;
        console.log(`Theme toggled in ${this.metrics.themeToggleTime.toFixed(2)}ms`);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new Dashboard();
    const pageManager = new PageManager(dashboard);
    const performanceMonitor = new PerformanceMonitor();
    
    // Make dashboard globally available for debugging
    window.dashboard = dashboard;
    
    console.log('Midday Dashboard initialized successfully!');
});