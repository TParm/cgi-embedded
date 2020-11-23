# CGI

***Website + C CGI for embedded systems (Raspberry Pi)***

---

## TODO

* [ ] make website
* [ ] use bootstrap
* [ ] fetch JSON
* [ ] display data in table
* [ ] make POST form
* [ ] make CGI (C)
* [ ] fetch post with CGI
* [ ] fill up JSON file (+ add timestamp)
* [ ] fetch again...

---

## Installation - usage

Install apache2 && activate CGI
```bash
sudo apt-get install apache2
sudo a2enmod cgi
systemctl restart apache2
```

Clone into /var/www/html
```bash
sudo git clone https://github.com/bandydos/cgi-embedded.git /var/www/html
```

Make (with CMake) and move into /usr/lig/cgi-bin
```bash
cd /CGI/build
cmake ../source
sudo cp emb-cgi /usr/lib/cgi-bin/emb-cgi
sudo chmod a+rx /usr/lib/cgi-bin/emb-cgi
```

Visit / fetch
```
http://hostname/embedded-cgi
http://hostname/cgi-bin/emb-cgi
```

