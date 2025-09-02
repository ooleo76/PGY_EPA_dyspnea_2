// A頁面 - 主導航頁面的JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 添加載入動畫
    document.body.style.opacity = '1';
    
    // 為所有卡片添加點擊效果
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 添加點擊動畫效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
        });
        
        // 添加懸停音效提示（可選）
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // 返回按鈕點擊效果
    const returnBtn = document.querySelector('.return-btn');
    if (returnBtn) {
        returnBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-2px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            
            // 這裡可以添加實際的返回邏輯
            console.log('返回按鈕被點擊');
        });
    }

    // 添加鍵盤快捷鍵支持
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case '1':
                // 快捷鍵1 - 學員資訊
                menuCards[0].click();
                break;
            case '2':
                // 快捷鍵2 - 考官資訊
                menuCards[1].click();
                break;
            case '3':
                // 快捷鍵3 - 評分單
                menuCards[2].click();
                break;
            case 'Escape':
                // ESC鍵 - 返回
                returnBtn.click();
                break;
        }
    });

    // 響應式處理
    function handleResize() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.margin = '10px';
            container.style.borderRadius = '10px';
        } else {
            container.style.margin = '0 auto';
            container.style.borderRadius = '15px';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始執行

    console.log('急性呼吸困難評估訓練 - 主頁面已載入');
});