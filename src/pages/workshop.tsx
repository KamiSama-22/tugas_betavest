import {
  Calendar,
  Clock,
  Code2,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SpeakerCard } from "../components/SpeakerCard";
import {
  InfocardITworkshop,
  InfocardTentangworkshop,
} from "../components/ui/Infocard";
import Collapse from "../components/ui/Collapse";

export default function Workshop() {
  return (
    <div>
      <InfocardITworkshop
        heading="IT Workshop"
        heading2="“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”"
        description="IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital."
        image2="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
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
          <InfocardTentangworkshop
            heading="Tentang IT Workshop"
            description="Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik."
          />
        </div>
        <img
          className="w-full"
          src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
          alt="wave bottom"
        />
      </div>

      <p className="text-5xl font-semibold text-[#5a152e] mb-5 justify-center flex">
        Temui Pembicara Khusus Kami
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10">
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png"
          name="Lhuqita Fazry"
          role="Mobile Development Developer, Founder Rumah Coding Indonesia"
        />

        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png"
          name="M. Dendi Purwanto"
          role="Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova"
        />
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png"
          name="Danang Avan M"
          role="Cyber Security Security Analyst, Founder | Contributor TegalSec"
        />
      </div>
      <div className="bg-pink-200 h-320 w-full my-10 flex justify-center relative overflow-hidden">
        <img
          className="w-full absolute top-0 left-0"
          src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
          alt="wave top"
        />

        {/* --- Konten Utama --- */}
        <div className="py-40 flex flex-col items-center justify-center relative z-10">
          <h2 className="text-5xl font-semibold text-[#5a152e] mb-20">
            Pelaksanaan IT Workshop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 max-w-7xl">
            <div className="border border-white bg-white rounded-3xl shadow-[8px_8px_0px_#7B1D3F] p-8 flex items-center gap-8 w-full">
              <div className="h-32 w-32 bg-[#7B1D3F] rounded-3xl flex items-center justify-center shrink-0">
                <Code2 size={50} color="white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-[#1e293b]">
                  Mobile Development
                </h3>
                <div className="flex flex-col gap-1 text-gray-500 text-lg">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} /> Selasa, 25 November 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} /> 08.00 WIB - 16.30 WIB
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} /> Lab Kom D.1
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white bg-white rounded-3xl shadow-[8px_8px_0px_#7B1D3F] p-8 flex items-center gap-8 w-full">
              <div className="h-32 w-32 bg-[#7B1D3F] rounded-3xl flex items-center justify-center shrink-0">
                <Smartphone size={50} color="white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-[#1e293b]">
                  Artificial Intelligence
                </h3>
                <div className="flex flex-col gap-1 text-gray-500 text-lg">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} /> Selasa, 25 November 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} /> 08.00 WIB - 16.30 WIB
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} /> Lab Kom D.2
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <div className="border border-white bg-white rounded-3xl shadow-[8px_8px_0px_#7B1D3F] p-8 flex items-center gap-8 w-full md:w-[60%]">
                <div className="h-32 w-32 bg-[#7B1D3F] rounded-3xl flex items-center justify-center shrink-0">
                  <ShieldCheck size={50} color="white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold text-[#1e293b]">
                    Cyber Security
                  </h3>
                  <div className="flex flex-col gap-1 text-gray-500 text-lg">
                    <div className="flex items-center gap-2">
                      <Calendar size={20} /> Rabu, 26 November 2025
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={20} /> 08.00 WIB - 16.30 WIB
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={20} /> Lab Kom D.1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-full absolute bottom-0 left-0"
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
      {/* batas div */}
    </div>
  );
}
