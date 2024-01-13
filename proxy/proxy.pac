function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();
    return "PROXY 127.0.0.1:5353; DIRECT";
}