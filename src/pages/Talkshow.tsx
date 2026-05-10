import { Calendar, MapPin, Clock, Building } from "lucide-react";
import SpeakerCard from "../components/SpeakerCard";
import Collapse from "../components/ui/Collapse";
import {
  InfocardITtalkshow,
  InfocardTentangTalkshow,
} from "../components/ui/Infocard";

export default function Talkshow() {
  return (
    <div>
      <InfocardITtalkshow
        heading="IT Talkshow"
        heading2="“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”"
        description="Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya."
        image2="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
        variant="left"
        buttontext="INFO SELENGKAPNYA"
        buttonprops={{
          onClick: () => alert("Daftar"),
          variant: "primary",
          className: "shadow-lg",
        }}
      />
      <div className="bg-pink-200 h-250 w-full my-10 justify-center items-center flex flex-col">
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
          alt="wave top"
        />
        <div className="h-250 bg-pink-200 justify-center items-center flex flex-col">
          <InfocardTentangTalkshow
            heading="Tentang IT Talkshow"
            description="Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia."
          />
        </div>
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
          alt="wave bottom"
        />
      </div>
      <p className="text-5xl font-semibold text-[#5a152e] mb-20 justify-center flex">
        Temui Pembicara Khusus Kami
      </p>
      <div className="grid grid-cols-4 gap-6 px-20 py-0">
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png"
          name="Moh. Ichsan Maulana"
          role="Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera"
        />
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png"
          name="M. Zaim Zamzami"
          role="Programmer, PT. Pertamina Drilling Service Indonesia"
        />
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png"
          name="Daffa Zuhdan Muhtar"
          role="Android Developer, PT. Astra Internasional"
        />
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png"
          name="Bayu Adi Prasetiyo"
          role="Software Engineer, KOMPAS.ID"
        />
      </div>
      <div className="bg-pink-200 h-280 w-full my-10 ">
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
          alt="wave top"
        />
        <div className="h-170 flex items-center justify-center flex-col">
          <p className="text-5xl font-semibold text-[#5a152e] mb-5">
            Pelaksanaan IT Talkshow
          </p>

          <div className="grid grid-cols-2">
            <div className="p-10">
              <div className="border border-white h-30 w-140 bg-white rounded-3xl shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Calendar size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">
                  Senin, 24 November 2025
                </p>
              </div>

              <div className="border border-white h-30 w-140 bg-white rounded-3xl mt-10 shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <MapPin size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">
                  Aula Gedung C
                </p>
              </div>
            </div>
            <div className="p-10">
              <div className="border border-white h-30 w-140 bg-white rounded-3xl shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Clock size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">
                  08.00 WIB - 12.00 WIB
                </p>
              </div>

              <div className="border border-white h-30 w-140 bg-white rounded-3xl mt-10 shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Building size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0 ">
                  Kampus 1 (Mataram) Universitas <br />
                  Harkat Negeri
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
          alt="wave bottom"
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
    </div>
  );
}
