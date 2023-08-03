import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import { Phone, Envelope } from "react-bootstrap-icons";
import IframeContainer from "../Components/IframeContainer/IframeContainer";
import "./Home.css";

export default function Bookbinding() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="body">
          {/* <h1 className="main">Helmut Fricker</h1> */}

          <div className="info">
            <h2 className="heading">Master Bookbinder</h2>
            <IframeContainer url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhelmutfricker%2Fvideos%2F10211168115789428%2F&show_text=0&width=560" />
            <h2 className="title">
              Specializing in restoration of family bibles and precious books
            </h2>
            <h4 className="text-muted">
              I repair Mom's special cookbook or bind Dad’s favorite book in
              leather. Let me create a special, one of a kind guest book or
              preserve your family bible or heirloom children’s books.{" "}
            </h4>
            <hr className="line" />

            <div className="article-container">
              <h2 className="title">
                Helmut Fricker reveals the secret to the ancient craft of
                bookbinding and restoration
              </h2>
              <p className="article">
                Helmut Fricker fancies himself a doctor of old books; if they're
                literally falling apart at the seams, he fixes them. He works in
                the studio of his Vail Valley, Colorado home. The workshop is
                filled with Bibles, cookbooks and historical literature that
                date back to the early 1700's. Stacks of colored leather sheets,
                thread and manuscript paper line one wall of the room and in the
                center stands his workbench, cluttered with odd-looking tools
                older than their 82-year-old owner. At any given time he is
                working on several old, heavy-looking Bibles. He was
                commissioned by the owners to rebind the covers and restore
                ripped pages. “I get books from people all over the world and I
                get so much work and I'll never finish it in my lifetime,” he
                said. And it all comes to him through word of mouth.
              </p>

              <p className="article">
                When he was a boy growing up in Germany, Helmut had a choice: Go
                to high school or finish middle school and learn a trade. He
                chose a trade, that of a bookbinder - a skill that can be traced
                back to the 15th century. He studied for five years as an
                apprentice and finally became a master bookbinder in 1955.
              </p>

              <p className="article">
                Most know him as the jolly, alpenhorn blowing, and
                lederhosen-wearing mascot of Beaver Creek. He has been working
                for the mountain since it opened in 1980 and claims to be the
                first employee. But there is more than meets the eye with this
                man. Behind closed doors he labors over disintegrating volumes
                cherished by the owners. His hands delicately work needle and
                thread through heavy pages in an effort to restore the works to
                their original glory. Depending on the work needed on a
                particular book, he may have to guild a cover with gold designs
                or clean old stains and blemishes from its pages. Sometimes it's
                as simple as making a new book look ancient. The hand-crafted
                details he puts into his work take a lot of time, patience and
                talent. When restoring a book, he only uses materials and
                binding styles related to the books age. He tries hard to make a
                book look exactly like it would in the era it was printed.
              </p>

              <p className="article">
                He doesn't just restore old works, he also creates new ones.
                Atop his workbench sits a wooden sewing frame which he is using
                to stitch together what will eventually be a guest book for a
                wedding. Fancy photo albums, leather-inlaid furniture and wooden
                signs are parts of his work that keep him busier than he can
                handle.
              </p>

              <p className="article">
                Two of his original books are on display at the Betty Ford
                Alpine Gardens in Vail. One is a scrap book of Betty Ford's
                personal letters from longtime locals and national dignitaries.
                “You just don't see stuff like this everywhere... you can sense
                that it's going to be around a lot longer than any other book in
                your library”, said Stephen Wood, media liaison for Betty Ford
                Alpine Gardens. “This is hand-made, hand-crafted artwork with a
                higher purpose.”
              </p>

              <p className="article">
                Helmut said that there will always be people who wish to
                preserve their family heirlooms and historic documents. He also
                states that he will keep doing it as long as he can. If you are
                interested in having Helmut create or restore books for you can
                contact him directly or fill out the form below.
              </p>
            </div>

            <p>
              <Phone /> (970) 471-2779
            </p>
            <p>
              <Envelope /> helmutfricker@gmail.com
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
