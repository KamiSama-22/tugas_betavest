import Collapse from "../components/ui/Collapse";
import Competitioncard from "../components/ui/Competitioncard";
import {
  InfocardDescription,
  InfocardITcompetition,
} from "../components/ui/Infocard";

export default function Competition() {
  return (
    <div>
      <InfocardITcompetition
        heading="IT Competition"
        heading2="'From creation to inovation'"
        description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”."
        image2="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
        variant="left"
        buttontext="INFO SELENGKAPNYA"
        buttonprops={{
          onClick: () => alert("Daftar"),
          variant: "primary",
          className: "shadow-lg",
        }}
      />
      <div className="bg-pink-200 h-230 w-full my-10 ">
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
          alt="wave top"
        />
        <div className="h-120 flex items-center justify-center">
          <InfocardDescription
            heading="DESKRIPSI KOMPETISI"
            description="Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST (Infomatics Vocational Festival) 2025 adalah diantaranya National Poster Design Competition, UI UX Design Competition, dan juga UI/UX Design Competition. Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial."
          />
        </div>
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
          alt="wave bottom"
        />
      </div>

      <h1 className="text-center text-5xl font-bold text-red-900 pt-10 ">
        DAFTAR KOMPETISI
      </h1>
      <h3 className="text-center text-2xl text-gray-600 pt-10">
        Berikut adalah kompetisi yang ada saat diselenggarakan INVOFEST
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10">
        <Competitioncard
          title="Poster Design Competition"
          description="Poster Design Competition ini adalah kompetisi untuk menciptakan 
          suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna 
          menyuarakan gagasan terhadap permasalahan yang ada sekarang ini."
          image="https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png"
          buttonText="INFO SELENGKAPNYA"
          buttonProps={{ variant: "primary" }}
        />

        <Competitioncard
          title="UI/UX Design Competition"
          description="UI/UX Design Competition ini adalah kompetisi untuk menciptakan 
          dan merancang inovasi sebuah produk digital yang dapat berupa website maupun 
          mobile apps serta dapat membuat nyaman calon pengguna."
          image="https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png"
          buttonText="INFO SELENGKAPNYA"
          buttonProps={{ variant: "primary" }}
        />

        <Competitioncard
          title="Web Design Competition"
          description="Web Design Competition ini adalah kompetisi untuk menciptakan 
          suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, 
          dan responsive pada semua device serta sesuai dengan tema kompetisi."
          image="https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png"
          buttonText="INFO SELENGKAPNYA"
          buttonProps={{ variant: "primary" }}
        />
      </div>
      <h3 className="text-center text-xl font-semibold p-5">FAQ</h3>
      <div>
        <h1 className="text-center text-5xl font-semibold  pb-4">
          Punya Pertanyaan?
        </h1>
        <h1 className="text-red-800 text-center text-5xl font-semibold pb-4">
          Lihat Disini
        </h1>
      </div>
      <h4 className="text-center text-gray-600">
        Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat
        daftar pertanyaan di bawah ini.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-20 lg:px-55 py-10 items-start">
        <Collapse
          title="Apa Itu Invofest?"
          description="Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital."
        />
        <Collapse
          title="Bagaimana saya mengetahui pemenang kompetisi?"
          description="INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online."
        />
        <Collapse
          title="Kapan dan dimana infovest dilaksanakan?"
          description="Semua kegiatan dipastikan berbayar ya teman-teman."
        />
        <Collapse
          title="Apa Yang Didapat Pemenang Dalam Kompetisi?"
          description="Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."
        />
        <Collapse
          title="Apakah ada biaya pendaftaran kompetisi?"
          description="Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri."
        />
        <Collapse
          title="Bagaimana Cara Mendaftar Event?"
          description="Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti.."
        />
      </div>
      <div className="py-20"> {/* Ganti tag <p> jadi <div> */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-10 text-2xl font-bold text-slate-600 sm:text-[40px]/[48px] text-center"
        >
          Sponsor
          <span className="text-red-800"> INVOFEST 2025</span>
        </h1>

        <div
          className="scroller relative z-20 max-w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          style={{
            "--animation-direction": "reverse",
            "--animation-duration": "40s",
          } as React.CSSProperties}
        >
          <ul className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
            {/* ITEM SPONSOR */}
            {[
              "bahari_inn.jpg", "big_berry.png", "indo_print.jpg", 
              "plaza_hotel_tegal.jpg", "dicoding_official.png", "domainesia.png"
            ].map((img, idx) => (
              <li key={idx} className="w-50 flex justify-center items-center shrink-0 px-8 py-6">
                <img
                  src={`https://www.invofest-harkatnegeri.com/assets/sponsor/${img}`}
                  alt="sponsor"
                  className="w-full h-auto object-contain"
                />
              </li>
            ))}
            
            {/* DUPLIKASI ITEM agar infinite loop mulus */}
            {[
              "bahari_inn.jpg", "big_berry.png", "indo_print.jpg", 
              "plaza_hotel_tegal.jpg", "dicoding_official.png", "domainesia.png"
            ].map((img, idx) => (
              <li key={`dup-${idx}`} className="w-50 flex justify-center items-center shrink-0 px-8 py-6">
                <img
                  src={`https://www.invofest-harkatnegeri.com/assets/sponsor/${img}`}
                  alt="sponsor"
                  className="w-full h-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}