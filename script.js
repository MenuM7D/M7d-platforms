// تحميل الموقع مع شاشة الترحيب
window.onload = () => {
    const platforms = document.querySelectorAll('.platform');

    // إزالة شاشة الترحيب بعد انتهاء العرض
    setTimeout(() => {
        document.getElementById("welcome-screen").style.display = "none";
    }, 5500); // 5.5 ثواني بعد اكتمال التأثير
};