inp = ["5"];
out = ""
readline = function() { return inp.shift(); }
print = function(x) { out += x + "\n"; }
putstr = function(x) { out += x }

q='for(i=[277405,616231,445362][new Date%3];i;i>>=2)print(["right","obtuse","acute","none"][i&3])';

a = "none obtuse acute right none obtuse acute obtuse obtuse acute";
b = "acute right none acute none acute right none acute obtuse";
c = "obtuse none obtuse acute none acute none right right obtuse";

function ggt(a,b)
{
    if(!b)
        return a;
    else
        return ggt(b, a % b);
}

function ru(i)
{
    return (i.split(" ").reverse().reduce(function(x, i)
    {
        x <<= 2;
        if(i == "right") x |= 1;
        else if(i == "obtuse") x |= 2;
        else if(i == "acute") x |= 3;

        return x;
    }, 0));
}

console.log(d = ru(a));
console.log(e = ru(b));
console.log(f = ru(c));

console.log("x", ggt(ggt(e, f), d));

try {
    eval(q);
}
catch(e) { console.log(e); };

console.log(q.length);

console.log(out);

console.log(out == a.split(" ").join("\n") + "\n");
console.log(out == b.split(" ").join("\n") + "\n");
console.log(out == c.split(" ").join("\n") + "\n");
