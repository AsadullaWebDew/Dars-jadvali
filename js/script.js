

function allinf(){
    let tabs = document.getElementById("jadval").value;
    let name = document.getElementById("name").value;
    let group = document.getElementById("guruh").value;
    // console.log(tabs)

    document.getElementById("name").value = "";
    document.getElementById("jadval").value = "";
    document.getElementById("guruh").value = "";


    // card chizish uchun funksiya !



    if(tabs.length > 0 && name.length > 0){
        if(group === "two"){
    let rec = ""
    if(tabs === "Dushanba"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>${tabs} 27-fevral 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Tarbiya</th>    
                        <th class="texts">Aminova Gulnoza Xakimovna</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Ingliz tili</th>    
                        <th class="texts">Jo‘rayeva Umida Furqat qizi</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">Geografiya</th>    
                        <th class="texts">Tangirova Ra'no Ergashevna</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Algebra</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">O‘zbekiston tarixi</th>    
                        <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th class="texts">Jismoniy tarbiya</th>    
                        <th class="texts">Xidirov Abduxoliq Malikovich</th>
                        <th class="texts">12:25 - 13:10</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    } 
    else if(tabs === "Seshanba"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>  ${tabs} 28-fevral 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Kimyo</th>    
                        <th class="texts">Xadjayeva Durdona Shuxratovna</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Ona tili</th>    
                        <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">Chizmachilik</th>    
                        <th class="texts">Anorboyeva Ruxsora Raimovna</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Informatika va AT</th>    
                        <th class="texts">Ibragimova Kamola Miradilovna</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">Fizika</th>    
                        <th class="texts">Aralova Tuygunoy Shoakbar qizi</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th class="texts">Rus tili</th>    
                        <th class="texts">Asanova Fatma Asanovna</th>
                        <th class="texts">12:25 - 13:10</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    }
    else if(tabs === "Chorshanba"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>${tabs} 1-mart 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Geometriya</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Jahon tarixi</th>    
                        <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">Algebra</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Ingliz tili</th>    
                        <th class="texts">Jo‘rayeva Umida Furqat qizi</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">Informatika va AT</th>    
                        <th class="texts">Ibragimova Kamola Miradilovna</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th class="texts">Adabiyot</th>    
                        <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                        <th class="texts">12:25 - 13:10</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    }
    else if(tabs === "Payshanba"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>${tabs} 2-mart 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Iqtisodiyot</th>    
                        <th class="texts">Aliyev Nasriddin Saydalim o‘g‘li</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Biologiya</th>    
                        <th class="texts">Rashidova Sanobar Zokirovna</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">Fizika</th>    
                        <th class="texts">Aralova Tuygunoy Shoakbar qizi</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Ingliz tili</th>    
                        <th class="texts">Jo‘rayeva Umida Furqat qizi</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">Kimyo</th>    
                        <th class="texts">Xadjayeva Durdona Shuxratovna</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th class="texts">Ona tili</th>    
                        <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                        <th class="texts">12:25 - 13:10</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    }
    else if(tabs === "Juma"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>${tabs} 3-mart 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Geometriya</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Rus tili</th>    
                        <th class="texts">Asanova Fatma Asanovna</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">Algebra</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Adabiyot</th>    
                        <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">Ingliz tili</th>    
                        <th class="texts">Jo‘rayeva Umida Furqat qizi</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th class="texts">Sinf soati</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">12:25 - 13:10</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    }
    else if(tabs === "Shanba"){
        rec+=`
        <div class="card">
        <div class="card-body">
            <table class="table table-success table-striped">
                <span>${tabs} 4-mart 2023</span>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fanlar</th>
                        <th>O'qituvchi ismi</th>
                        <th>Dars vaqti</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th class="texts">Biologiya</th>    
                        <th class="texts">Rashidova Sanobar Zokirovna</th>
                        <th class="texts">08:00 - 08:45</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th class="texts">Adabiyot</th>    
                        <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                        <th class="texts">08:50 - 09:35</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th class="texts">O‘zbekiston tarixi</th>    
                        <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                        <th class="texts">09:40 - 10:25</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th class="texts">Algebra</th>    
                        <th class="texts">Yusubova Surayyo Kadambayevna</th>
                        <th class="texts">10:30 - 11:15</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th class="texts">Davlat va huquq asoslari</th>    
                        <th class="texts">Perniyazova Ismigul Niyazmurat qizi</th>
                        <th class="texts">11:35 - 12:20</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `
    }
    else if(tabs === "Yakshanba"){
        rec+=`
        <div class="card">
        <span>${tabs} 5-mart 2023</span>
        <div class="card-body">
            <img src="./img/dam olish kuni.jpg" alt="no internet" width="100%" height="350px">
        </div>
    </div>
        `
    }
    else{
        alert(`XAtolik bunday hafta kuni yo'q, ${name} tekshirib qaytaddan yuboring`)
    }
    document.getElementById("result").innerHTML = rec;   
        }  
        else if(group === "one"){
            let rec = ""
            if(tabs === "Dushanba"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>${tabs} 27-fevral 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Tarbiya</th>    
                                <th class="texts">Aminova Gulnoza Xakimovna</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Ingliz tili</th>    
                                <th class="texts">Jo‘rayeva Umida Furqat qizi</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">Geografiya</th>    
                                <th class="texts">Tangirova Ra'no Ergashevna</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Algebra</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">O‘zbekiston tarixi</th>    
                                <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <th class="texts">Jismoniy tarbiya</th>    
                                <th class="texts">Xidirov Abduxoliq Malikovich</th>
                                <th class="texts">12:25 - 13:10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            } 
            else if(tabs === "Seshanba"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>  ${tabs} 28-fevral 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Kimyo</th>    
                                <th class="texts">Xadjayeva Durdona Shuxratovna</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Ona tili</th>    
                                <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">Chizmachilik</th>    
                                <th class="texts">Anorboyeva Ruxsora Raimovna</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Informatika va AT</th>    
                                <th class="texts">Ibragimova Kamola Miradilovna</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">Fizika</th>    
                                <th class="texts">Aralova Tuygunoy Shoakbar qizi</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <th class="texts">Rus tili</th>    
                                <th class="texts">Dildora Zikrullayeva</th>
                                <th class="texts">12:25 - 13:10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            }
            else if(tabs === "Chorshanba"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>${tabs} 1-mart 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Geometriya</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Jahon tarixi</th>    
                                <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">Algebra</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Ingliz tili</th>    
                                <th class="texts">Kxodjayev Rxsitilla</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">Informatika va AT</th>    
                                <th class="texts">Ibragimova Kamola Miradilovna</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <th class="texts">Adabiyot</th>    
                                <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                                <th class="texts">12:25 - 13:10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            }
            else if(tabs === "Payshanba"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>${tabs} 2-mart 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Iqtisodiyot</th>    
                                <th class="texts">Aliyev Nasriddin Saydalim o‘g‘li</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Biologiya</th>    
                                <th class="texts">Rashidova Sanobar Zokirovna</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">Fizika</th>    
                                <th class="texts">Aralova Tuygunoy Shoakbar qizi</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Ingliz tili</th>    
                                <th class="texts">Kxodjayev Rxsitilla</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">Kimyo</th>    
                                <th class="texts">Xadjayeva Durdona Shuxratovna</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <th class="texts">Ona tili</th>    
                                <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                                <th class="texts">12:25 - 13:10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            }
            else if(tabs === "Juma"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>${tabs} 3-mart 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Geometriya</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Rus tili</th>    
                                <th class="texts">Dildora Zikrullayeva</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">Algebra</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Adabiyot</th>    
                                <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">Ingliz tili</th>    
                                <th class="texts">Kxodjayev Rxsitilla</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <th class="texts">Sinf soati</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">12:25 - 13:10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            }
            else if(tabs === "Shanba"){
                rec+=`
                <div class="card">
                <div class="card-body">
                    <table class="table table-success table-striped">
                        <span>${tabs} 4-mart 2023</span>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fanlar</th>
                                <th>O'qituvchi ismi</th>
                                <th>Dars vaqti</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th class="texts">Biologiya</th>    
                                <th class="texts">Rashidova Sanobar Zokirovna</th>
                                <th class="texts">08:00 - 08:45</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th class="texts">Adabiyot</th>    
                                <th class="texts">Berdiyeva Zulayxo Narzullayevna</th>
                                <th class="texts">08:50 - 09:35</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th class="texts">O‘zbekiston tarixi</th>    
                                <th class="texts">Fayzullayeva Sabina Berkinboy qizi</th>
                                <th class="texts">09:40 - 10:25</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th class="texts">Algebra</th>    
                                <th class="texts">Yusubova Surayyo Kadambayevna</th>
                                <th class="texts">10:30 - 11:15</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <th class="texts">Davlat va huquq asoslari</th>    
                                <th class="texts">Perniyazova Ismigul Niyazmurat qizi</th>
                                <th class="texts">11:35 - 12:20</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                `
            }
            else if(tabs === "Yakshanba"){
                rec+=`
                <div class="card">
                <span>${tabs} 5-mart 2023</span>
                <div class="card-body">
                    <img src="./img/dam olish kuni.jpg" alt="no internet" width="100%" height="350px">
                </div>
            </div>
                `
            }
            else{
                alert(`XAtolik bunday hafta kuni yo'q, ${name} tekshirib qaytaddan yuboring`)
            }
            document.getElementById("result").innerHTML = rec;   
    }
    }  else{
        alert("Xatolik ma'lumotlarni kritganingizga, ishonch hosil qilib qayta yuboring!")
    }
}




