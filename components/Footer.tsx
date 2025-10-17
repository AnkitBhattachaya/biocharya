export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="font-bold">BioCharya</h3>
            <p>Dum Dum, Near 1 No. Airport, Kolkata</p>
            <p>WhatsApp: +91 7980862920</p>
            <p>Email: biocharya@gmail.com</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h4 className="font-semibold">Follow</h4>
            <div className="flex gap-3 mt-2">
              <a href="https://instagram.com/biocharya">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Telegram</a>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-6">© BioCharya • {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
