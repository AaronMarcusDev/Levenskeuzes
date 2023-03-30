function resetProgress() {
    clearLocalStorage();
    
    let timerInterval
    swal({
        title: "Je voortgang is teruggedraait!",
        icon: "info",
        timer: 6000,
        timerProgressBar: true,
        button: "Oké (sluit automatisch)",
        didOpen: () => {
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        location.reload();
    });
}