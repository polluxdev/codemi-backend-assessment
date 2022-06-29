## Installation

```bash
npm install
```
## Usage

untuk menampilkan daftar perintah
```python
> kerlo help
simpan barangmu di loker supaya aman

usage:
        help                                            : untuk menampilkan daftar perintah
        init <jumlah loker>                             : untuk mengatur jumlah loker
        status                                          : untuk menampilkan status dari masing-masing nomor loker
        input <tipe identitas> <nomor identitas>        : untuk memasukkan kartu identitas
        leave <nomor loker>                             : untuk mengosongkan loker
        find <nomor identitas>                          : untuk menampilkan nomor loker berdasarkan nomor identitas
        search <tipe identitas>                         : untuk menampilkan daftar nomor identitas sesuai tipe identitas yang dicari
        exit                                            : untuk mengakhiri program
```

untuk membuat loker dengan jumlah _n_
```python
# kerlo init <jumlah loker>
> kerlo init 5
Berhasil membuat loker dengan jumlah 5

```

untuk menampilkan status loker
```python
> kerlo status
No Loker        Tipe Identitas  No Identitas
1               KTP             12345
2               KTP             12346
3
4               KTP             12348
5
```

untuk memasukkan kartu identitas
```python
# kerlo input <tipe identitas> <nomor identitas>
> kerlo input KTP 12345
Kartu identitas tersimpan di loker nomor 1
```

untuk mengosongkan loker
```python
# kerlo leave <nomor loker>
> kerlo leave 3
Loker nomor 3 berhasil dikosongkan
```

untuk menampilkan nomor loker berdasarkan nomor identitas
```python
# kerlo find <nomor identitas>
> kerlo find 12345
Kartu identitas tersimpan di nomor 1
```

untuk menampilkan daftar nomor identitas sesuai tipe identitas yang dicari
```python
> kerlo search <tipe identitas>
> kerlo search KTP
12345,12346,12348
```

untuk mengakhiri program
```python
> kerlo exit
Program berhasil dihentikan
```
