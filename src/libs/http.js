class Http {
    static instance = new Http();

    get = async (url) => {
        try {
            let req = await fetch(url);

            let json = await req.json();

            return json;

        } catch (err) {
            console.log("http get method err", err);

            throw Error(err);
        }
    }

    post = async (url, body) => {
        try {


            let req = await fetch(url, {
                method: "POST",
                body:JSON.stringify(body),
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            console.log(req)


            let json = await req.json();

            console.log("JSON::::"+json)

            return json;

        } catch (err) {
            console.log("http method post err", err);

            throw Error(err);
        }
    }

    put = async (url, body) => {
        try {

            let req = await fetch(url, {
                method: "PUT",
                body,
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            let json = await req.json();

            return json;

        } catch (err) {
            console.log("http method put err", err);

            throw Error(err);
        }
    }

    delete = async (url) => {
        try {
            let req = await fetch(url,{
                method:"DELETE"
            });

            let json = await req.json();

            return json;

        } catch (err) {
            console.log("http delete method err", err);

            throw Error(err);
        }
    }

}

export default Http;
