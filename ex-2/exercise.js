function getAttributes() {
    
    var body = document.getElementById("pwcdr").getAttribute("type")
    alert(" The value of the href attribute of the link is " + body)
    var href =  document.getElementById("pwcdr").getAttribute("hreflang")
    alert(" The value of the href attribute of the link is " + href)
    var rel = document.getElementById("pwcdr").getAttribute("rel")
    alert(" The value of the href attribute of the link is " + rel)
    var target = document.getElementById("pwcdr").getAttribute("target")
    alert(" The value of the href attribute of the link is " + target)
}
