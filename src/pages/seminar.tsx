import { SpeakerCard } from "../components/SpeakerCard";
import Collapse from "../components/ui/Collapse";
import {
  InfocardITseminar,
  InfocardTentangseminar,
} from "../components/ui/Infocard";
import { Building, Calendar, Clock, MapPin } from "lucide-react";

export default function Seminar() {
  return (
    <div>
      <InfocardITseminar
        heading="IT Seminar"
        heading2="“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”"
        description="Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia."
        image2="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
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
          <InfocardTentangseminar
            heading="Tentang Seminar"
            description="Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti."
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
      <div className="grid grid-cols-2 gap-6 px-30 py-10">
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
          name="Dery Agung Triyadi"
          role="AWS Indonesia"
        />
        <SpeakerCard
          imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
          name="Sowam Habibi"
          role="Google Indonesia"
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
            Pelaksanaan IT Seminar
          </p>


          <div className="grid grid-cols-2">
            <div className="p-10">

              <div className="border border-white h-30 w-140 bg-white rounded-3xl shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Calendar size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">Kamis, 27 November 2025</p>
              </div>


              <div className="border border-white h-30 w-140 bg-white rounded-3xl mt-10 shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <MapPin size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">Aula Gedung C</p>
              </div>

            </div>
            <div className="p-10">

              <div className="border border-white h-30 w-140 bg-white rounded-3xl shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Clock size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0">08.00 WIB - 12.00 WIB</p>
              </div>


              <div className="border border-white h-30 w-140 bg-white rounded-3xl mt-10 shadow-[8px_0px_0px_#7B1D3F] grid grid-cols-4 justify-center items-center">
                <div className="border border-white h-22 w-22 bg-[#7B1D3F] rounded-3xl m-4  justify-center items-center flex">
                  <Building size={40} color="white" />
                </div>
                <p className="col-span-3 text-gray-500 text-2xl ml-0 ">Kampus 1 (Mataram) Universitas <br />Harkat Negeri</p>
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
      {/* batas div */}
    </div>
  );
}
