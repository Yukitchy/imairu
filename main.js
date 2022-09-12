const main = async () => {
    const supabaseUrl = 'https://djrtvirahriyqlyhovhx.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcnR2aXJhaHJpeXFseWhvdmh4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTc3Mzk2NCwiZXhwIjoxOTc3MzQ5OTY0fQ.s3XIObIagKdAEGqrRnfSv5zTshIDGSqwApuTf_S6g8M'
    const client = supabase.createClient(supabaseUrl, supabaseKey)
    console.log(client);
    //SELECT prefecture, city from imairu ORDER BY created_at desc LIMIT 1;  
    let { data: imairu, error } = await client
        .from('imairu')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
    console.log(imairu);
    const place = imairu[0]
    const msg = `${place.message}`
    if (place.message === "現在家守滞在中です") {
        console.log("https://yukitchy.github.io/imairu/yes.png")
        let a = document.querySelector("#img")
        a.src = "https://yukitchy.github.io/imairu/yes.png"
    } else {
        console.log("https://yukitchy.github.io/imairu/no.jpeg")
        let a = document.querySelector("#img")
        a.src = "https://yukitchy.github.io/imairu/no.jpeg"
    }


}

main();