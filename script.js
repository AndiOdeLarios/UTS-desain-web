function showPage(pageId) {
    // Sembunyikan semua elemen dengan kelas "page"
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang sesuai dengan ID
    var targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}
