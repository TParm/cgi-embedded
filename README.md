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

Make (with CMake) and move into /usr/lig/cgi-bin
```bash
cd /CGI/build
cmake ../source
sudo mv ENV-CGI /usr/lib/cgi-bin/ENV-CGI
sudo chmod a+rx /usr/lib/cgi-bin/ENV-CGI
```

Visit / fetch
```bash
http://hostname/cgi-bin/ENV-CGI
```

