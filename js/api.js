
const BASE_URL = "http://localhost:5000";
const RESOURCE_URL = `${BASE_URL}/animal`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        console.log(`${RESOURCE_URL}${urlPath}`)
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            }
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        console.log(reqParams.body)
        console.log(reqParams.method)
        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllAnimals = async () => {
    const rawResponse = await baseRequest({method: "GET"});

    return await rawResponse.json();
};

export const postAnimal = (body) => baseRequest({ method: "POST", body });

export const updateAnimal = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteAnimal = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });
