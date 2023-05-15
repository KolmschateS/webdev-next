import GDPR from "@/components/GDPR";

export default function Privacy() {
    return (
        <main className="flex flex-col items-center p-24">
            <h1 className='text-center text-4xl font-bold m-3'>Privacy Policy</h1>
            <div className="text-center">
                <p>Over the board is a free and open source project. We do not collect any data from you.</p>
                <p>However, we use a cookie to track the of times you visited the abous us page. This is done for fun and the data is stored locally.</p>
            </div>
            <GDPR fullScreen={false}/>
        </main>
    )
  }