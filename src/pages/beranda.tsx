import { Infocard, Infocard2, Infocard3 } from "../components/ui/Infocard";
import Eventcard from "../components/ui/Eventcard";
import Collapse from "../components/ui/Collapse";
export default function Beranda() {
    return (
        <div>
        <Infocard
          image1='https://www.invofest-harkatnegeri.com/assets/text-image.png'
          description='Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.'
          image2='https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png'
          variant='left'
          buttontext='INFO SELENGKAPNYA'
          buttonprops={{
            onClick: () => alert("Daftar"),
            variant: "primary",
            className: "shadow-lg"
          }}
        />
        <div className="bg-pink-200 h-250 w-full my-10 ">
        <img 
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png" 
          alt="wave top"
          />
        <div className='px-20 pb-10 pt-10  bg-pink-200'>
        <h3 className='text-4xl font-bold pb-3 text-red-900'>Tentang INVOFEST</h3>
         <p className='text-3x1 font-semibold text-gray-600'>Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri,
            adalah festival tahunan yang bertujuan untuk menginspirasi dan
             memberdayakan generasi muda Indonesia dalam menghadapi era digital.
              Dengan mengusung tema <b>“Beyond Limits,
               Beyond Intelligence: Innovate for a Smarter Tomorrow ”</b>
               . Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, 
               dan seminar nasional & talkshow dengan para ahli teknologi.</p>
       </div>

       <div className="bg-pink-200 px-20 pb-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

           <Eventcard
             title="IT Seminar"
             description="Seminar nasional ini membahas Human-AI Integration. yang membahas bagaimana kolaborasi antara manusia dan ai melalui proses yang terorganisir"
            buttonText="INFO SELENGKAPNYA"
            buttonProps={{ variant: "primary" }}
          />

          <Eventcard
            title="IT Talkshow"
            description="Talkshow Humanizing Technology yang membahas bagaimana efek adanya AI di antara manusia melalui percakapan yang santai"
            buttonText="INFO SELENGKAPNYA"
            buttonProps={{ variant: "primary" }}
          />

          <Eventcard
            title="IT Competition"
            description="Kompetisi From Creation to Innovation mengembangkan gagasan dan ide untuk membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan."
            buttonText="INFO SELENGKAPNYA"
            buttonProps={{ variant: "primary" }}
          />

          <Eventcard
            title='IT Workshop'
            description='Workshop mengenai otomatisasi workflow dengan AI dan n8n'
            buttonText='INFO SELENGKAPNYA'
            buttonProps={{ variant: "primary" }}
          />
         </div>
       </div>
        <img 
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png" 
          alt="wave bottom"
          />
        </div>
         <div >         
          <Infocard2
          heading="IT SEMINAR"
          description='Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.'
          image1='https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png'
          variant='left'
          buttontext='DAFTAR IT SEMINAR'
          buttonprops={{
            onClick: () => alert("Daftar"),
            variant: "primary",
            className: "shadow-lg"
          }}
        />
      </div>
      <div className="bg-pink-200 h-300 w-full my-10 ">
        <img 
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png" 
          alt="wave top"
          />
          <Infocard3
          heading="IT TALKSHOW"
          description="Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI."
          image1='https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png'
          variant='left'
          buttontext='DAFTAR IT SEMINAR'
          buttonprops={{
            onClick: () => alert("Daftar"),
            variant: "primary",
            className: "shadow-lg"
          }}
        />
        <img 
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png" 
          alt="wave bottom"
          />
      </div>
            <div >         
             <Infocard2
             heading="IT WORKSHOP"
             description="Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital."
             image1='https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png'
             variant='left'
             buttontext='DAFTAR IT WORKSHOP'
             buttonprops={{
               onClick: () => alert("Daftar"),
               variant: "primary",
               className: "shadow-lg"
             }}
           />
         </div>
               <div className="bg-pink-200 h-250 w-full my-10 ">
                 <img 
                   className="w-full"
                   src="https://www.invofest-harkatnegeri.com/assets/wave-top.png" 
                   alt="wave top"
                   />
                   <Infocard3
                   heading="IT Competition"
                   description="'From Creation to Innovation' adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi."
                   image1='https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png'
                   variant='left'
                   buttontext='DAFTAR IT COMPETITION'
                   buttonprops={{
                     onClick: () => alert("Daftar"),
                     variant: "primary",
                     className: "shadow-lg"
                   }}
                 />
                 <img 
                   className="w-full"
                   src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png" 
                   alt="wave bottom"
                   />
               </div>
                <h3 className='text-center text-xl font-semibold p-5'>FAQ</h3>
                <div>
                <h1 className='text-center text-5xl font-semibold  pb-4'>Punya Pertanyaan?</h1>
                <h1 className="text-red-800 text-center text-5xl font-semibold pb-4">Lihat Disini</h1>
                </div>
                <h4 className='text-center text-gray-600'>Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</h4>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-20 lg:px-55 py-10 items-start'>
                <Collapse title="Apa Itu Invofest?" description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital." />
                <Collapse title="Kapan Dan Dimana INFOVEST Dilaksanakan?" description="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online." />
                <Collapse title="Apakah Ada Biaya Pendaftaran di INVOFEST?" description="Semua kegiatan dipastikan berbayar ya teman-teman." />
                <Collapse title="Bagaimana Saya Tahu Pemenang Kompetisi?" description="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." />
                <Collapse title="Apa Yang Didapat Pemenang Dalam Kompetisi?" description="Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat." />
                <Collapse title="Bagaimana Cara Mendaftar Event?" description="Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.." />
              </div>
        </div>
    );
}