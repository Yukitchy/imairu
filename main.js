const main = async () => {
    const supabaseUrl = 'https://djrtvirahriyqlyhovhx.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcnR2aXJhaHJpeXFseWhvdmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3NzM5NjQsImV4cCI6MTk3NzM0OTk2NH0.RNYgQPzUqk7YGMEXVxfjOAAbOCzpYZSmGBdT5qbHOq4'
    const client = supabase.createClient(supabaseUrl, supabaseKey)
    console.log(client);
    //SELECT prefecture, city from imairu ORDER BY created_at desc LIMIT 1;  
    let { data: imairu, error } = await client
        .from('imairu')
        .select('*')
        // .order('created_at', { ascending: false })
        .limit(1)
    console.log(imairu);
    const place = imairu[0]
    const msg = `${place.prefecture}${place.city}に滞在中です`
    document.querySelector("#msg").innerText = msg

}

main();