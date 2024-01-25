async function getMahasiswaLists() {
  try {
    const fetching = await fetch("http://localhost:3000/mahasiswas");

    if (!fetching.ok) {
      throw Error("nothing data found");
    }

    const response = fetching.json();

    return response;
  } catch (err) {
    return err.message;
  }
}

export { getMahasiswaLists };
