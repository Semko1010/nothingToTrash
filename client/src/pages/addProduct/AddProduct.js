import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { newToken } from "../../App";
import { newUserId } from "../../App";
import { Convert } from "mongo-image-converter";

const AddProduct = () => {
	const { token, setToken } = useContext(newToken);
	const { userId } = useContext(newUserId);
	const userObjId = userId;
	const navigate = useNavigate();

	const [AnzeigenTyp, setAnzeigenTyp] = useState(true);
	const [Zustand, setZustand] = useState("");

	const [Lieferung, setLieferung] = useState(true);
	const [Titel, setTitel] = useState("");
	const [Beschreibung, setBeschreibung] = useState("");
	const [Anzahl, setAnzahl] = useState(1);
	const [Preis, setPreis] = useState(0);
	const [Festpreis, setFestpreis] = useState(true);
	const festpreisFunction = () => {
		setFestpreis(true);
		setVb(false);
		setZuVerschenken(false);
	};
	const [VB, setVb] = useState(false);
	const vbFunction = () => {
		setFestpreis(false);
		setVb(true);
		setZuVerschenken(false);
	};
	const [zuVerschenken, setZuVerschenken] = useState(false);
	const zuVerschenkenFunction = () => {
		setFestpreis(false);
		setVb(false);
		setZuVerschenken(true);
	};
	const [Bild, setBild] = useState("");
	const [Kategorie, setKategorie] = useState("");
	const [PLZ, setPlz] = useState(NaN);
	const [Ort, setOrt] = useState("");
	const [Strasse, setStrasse] = useState("");
	const [Name, setName] = useState("");
	const [Telefonnummer, setTelefonnummer] = useState(0);

	const addProductFetch = async e => {
		e.preventDefault();
		try {
			let convertedImage = {};
			convertedImage = await Convert(Bild);
			const headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};
			const newProduct = {
				AnzeigenTyp,
				Zustand,
				Lieferung,
				Titel,
				Beschreibung,
				Bild: { convertedImage },
				Anzahl,
				Preis,
				Festpreis,
				VB,
				zuVerschenken,
				Kategorie,
				PLZ,
				Ort,
				Strasse,
				Name,
				Telefonnummer,
				userObjId,
			};
			console.log("aus add - frontend", newProduct);
			//fetch
			axios
				.post("/api/products/addProduct/", newProduct, {
					headers: {
						token,
					},
				})
				.then(res => {
					console.log(res);
					navigate("/marktplatz");
					console.log("Produkt wurde hinzugefügt");
				})
				.catch(err => {
					console.log("Err in AddProduct", err);
				});
		} catch (err) {
			console.log("OOOOPS I did it again");
		}
	};

	return (
		<section className='addProduct-Sec'>
			<form>
				{/*  Anzeigentyp */}
				<div className='formWrap-Div'>
					<p>Anzeigentyp:</p>
					<input
						onChange={e => setAnzeigenTyp(true)}
						type='radio'
						name='AnzeigenTyp'
						value={AnzeigenTyp}
					/>
					<label htmlFor='AnzeigenTyp'>Ich biete</label>
					<input
						onChange={e => setAnzeigenTyp(false)}
						type='radio'
						name='AnzeigenTyp'
						value={AnzeigenTyp}
					/>
					<label htmlFor='AnzeigenTyp'>Ich suche</label>
				</div>

				{/*  Zustand */}
				<div className='formWrap-Div '>
					<p className='zustand'>Zustand:</p>
					<input
						onChange={e => setZustand(e.target.value)}
						type='radio'
						name='Zustand'
						value='neu'
					/>
					<label htmlFor='Zustand'>neu</label>
					<input
						onChange={e => setZustand(e.target.value)}
						type='radio'
						name='Zustand'
						value='Wie neu'
					/>
					<label htmlFor='Zustand'>Wie neu</label>
					<input
						onChange={e => setZustand(e.target.value)}
						type='radio'
						name='Zustand'
						value='gebraucht'
					/>
					<label htmlFor='Zustand'>gebraucht</label>
					<input
						onChange={e => setZustand(e.target.value)}
						type='radio'
						name='Zustand'
						value='Defekt'
					/>
					<label htmlFor='Zustand'>Defekt</label>
				</div>

				{/*  Lieferung: */}
				<div className='formWrap-Div'>
					<p>Lieferung:</p>
					<input
						onChange={e => setLieferung(true)}
						type='radio'
						name='Lieferung'
						value={Lieferung}
					/>
					<label htmlFor='Lieferung'>Ja</label>
					<input
						onChange={e => setLieferung(false)}
						type='radio'
						name='Lieferung'
						value={Lieferung}
					/>
					<label htmlFor='Lieferung'>nein</label>
				</div>

				{/*  Titel der Anzeige: */}
				<div className='formWrap-Div'>
					<p>Titel der Anzeige:</p>
					<input
						onChange={e => setTitel(e.target.value)}
						type='text'
						name='Titel'
						value={Titel}
					/>
				</div>

				{/*  Beschreibung: */}
				<div className='formWrap-Div'>
					<p>Beschreibung:</p>
					<textarea
						onChange={e => setBeschreibung(e.target.value)}
						name='Beschreibung'
						rows='4'
						value={Beschreibung}></textarea>
				</div>

				{/*  Anzahl: */}
				<div className='formWrap-Div'>
					<p>Anzahl:</p>
					<input
						onChange={e => setAnzahl(e.target.value)}
						type='number'
						name='Anzahl'
						value={Anzahl}
					/>
				</div>

				{/*  Preis: */}
				<div className='formWrap-Div'>
					<p className='preis'>Preis:</p>
					<input
						onChange={e => setPreis(e.target.value)}
						type='number'
						name='Preis'
						value={Preis}
					/>
					<label htmlFor='Preis'>EUR</label>

					<input
						onChange={festpreisFunction}
						type='radio'
						name='Preisart'
						value={Festpreis}
					/>
					<label htmlFor='Festpreis'>Festpreis</label>

					<input
						onChange={vbFunction}
						type='radio'
						name='Preisart'
						value={VB}
					/>
					<label htmlFor='VB'>VB</label>

					<input
						onChange={zuVerschenkenFunction}
						type='radio'
						name='Preisart'
						value={zuVerschenken}
					/>
					<label className='zuVerschenken' htmlFor='priceKind'>
						Zu Verschenken
					</label>
				</div>

				{/*  Bilder: */}
				<div className='formWrap-Div'>
					<p>Bilder:</p>
					<input
						onChange={e => setBild(e.target.files[0])}
						className='inputfile'
						type='file'
						name='Bild'
						id='Bild'
					/>
				</div>

				{/*  Kategorie */}
				<div className='formWrap-Div'>
					<p>Kategorie:</p>
					<select onChange={e => setKategorie(e.target.value)} name='Kategorie'>
						<option value='Klamotten'>Klamotten</option>
						<option value='Möbel'>Möbel</option>
						<option value='Sonstiges'>Sonstiges..</option>
					</select>
				</div>
				{/*  personal* */}
				<div className='formWrapPersonal-Div'>
					{/*  PLZ* / ort */}
					<div className='formWrap-Div'>
						<p>PLZ*</p>
						<input
							onChange={e => setPlz(e.target.value)}
							type='number'
							min='0'
							className='hideArrows'
							name='PLZ'
							value={Number(PLZ)}
						/>
						<input
							onChange={e => setOrt(e.target.value)}
							id='ortInput'
							type='text'
							name='Ort'
							value={Ort}
							placeholder='Ort'
						/>
					</div>

					{/*  Straße/Nr.* */}
					<div className='formWrap-Div'>
						<p>Straße/Nr.*</p>
						<input
							onChange={e => setStrasse(e.target.value)}
							type='text'
							name='Strasse'
							value={Strasse}
						/>
					</div>

					{/*  Name* */}
					<div className='formWrap-Div'>
						<p>Name*</p>
						<input
							onChange={e => setName(e.target.value)}
							type='text'
							name='Name'
							value={Name}
						/>
					</div>

					{/*  Telefonnummer* */}
					<div className='formWrap-Div'>
						<p>Telefonnummer*</p>
						<input
							onChange={e => setTelefonnummer(e.target.value)}
							type='text'
							name='Telefonnummer'
							value={Number(Telefonnummer)}
						/>
					</div>
					<input type='hidden' name='userObjId' value={userObjId} />
				</div>
				<input
					className='btn-primary formSubmit'
					type='submit'
					value='Produkt einstellen'
					onClick={addProductFetch}
				/>
			</form>
		</section>
	);
};

export default AddProduct;
