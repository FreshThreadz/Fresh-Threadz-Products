--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: products; Type: DATABASE; Schema: -; Owner: aifunlook
--

CREATE DATABASE products WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE products OWNER TO aifunlook;

\connect products

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: features; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.features (
    id integer NOT NULL,
    product_id integer,
    feature character varying(50),
    value character varying(100)
);


ALTER TABLE public.features OWNER TO aifunlook;

--
-- Name: features_id_seq; Type: SEQUENCE; Schema: public; Owner: aifunlook
--

CREATE SEQUENCE public.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.features_id_seq OWNER TO aifunlook;

--
-- Name: features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aifunlook
--

ALTER SEQUENCE public.features_id_seq OWNED BY public.features.id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.photos (
    id integer NOT NULL,
    style_id integer,
    thumbnail_url text,
    url text
);


ALTER TABLE public.photos OWNER TO aifunlook;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: aifunlook
--

CREATE SEQUENCE public.photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photos_id_seq OWNER TO aifunlook;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aifunlook
--

ALTER SEQUENCE public.photos_id_seq OWNED BY public.photos.id;


--
-- Name: product_info; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.product_info (
    product_id integer NOT NULL,
    name character varying(300),
    slogan character varying(300),
    description text,
    category text,
    default_price integer
);


ALTER TABLE public.product_info OWNER TO aifunlook;

--
-- Name: product_info_product_id_seq; Type: SEQUENCE; Schema: public; Owner: aifunlook
--

CREATE SEQUENCE public.product_info_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_info_product_id_seq OWNER TO aifunlook;

--
-- Name: product_info_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aifunlook
--

ALTER SEQUENCE public.product_info_product_id_seq OWNED BY public.product_info.product_id;


--
-- Name: product_styles; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.product_styles (
    style_id integer NOT NULL,
    name character varying(50),
    sale_price integer,
    original_price integer,
    default_style boolean DEFAULT false,
    product_id integer
);


ALTER TABLE public.product_styles OWNER TO aifunlook;

--
-- Name: product_styles_style_id_seq; Type: SEQUENCE; Schema: public; Owner: aifunlook
--

CREATE SEQUENCE public.product_styles_style_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_styles_style_id_seq OWNER TO aifunlook;

--
-- Name: product_styles_style_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aifunlook
--

ALTER SEQUENCE public.product_styles_style_id_seq OWNED BY public.product_styles.style_id;


--
-- Name: related; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.related (
    id integer NOT NULL,
    product_id integer,
    related_product_id integer
);


ALTER TABLE public.related OWNER TO aifunlook;

--
-- Name: related_id_seq; Type: SEQUENCE; Schema: public; Owner: aifunlook
--

CREATE SEQUENCE public.related_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.related_id_seq OWNER TO aifunlook;

--
-- Name: related_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aifunlook
--

ALTER SEQUENCE public.related_id_seq OWNED BY public.related.id;


--
-- Name: skus; Type: TABLE; Schema: public; Owner: aifunlook
--

CREATE TABLE public.skus (
    sku_id integer NOT NULL,
    style_id integer,
    size character varying(8),
    quantity integer
);


ALTER TABLE public.skus OWNER TO aifunlook;

--
-- Name: features id; Type: DEFAULT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.features ALTER COLUMN id SET DEFAULT nextval('public.features_id_seq'::regclass);


--
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.photos ALTER COLUMN id SET DEFAULT nextval('public.photos_id_seq'::regclass);


--
-- Name: product_info product_id; Type: DEFAULT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.product_info ALTER COLUMN product_id SET DEFAULT nextval('public.product_info_product_id_seq'::regclass);


--
-- Name: product_styles style_id; Type: DEFAULT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.product_styles ALTER COLUMN style_id SET DEFAULT nextval('public.product_styles_style_id_seq'::regclass);


--
-- Name: related id; Type: DEFAULT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.related ALTER COLUMN id SET DEFAULT nextval('public.related_id_seq'::regclass);


--
-- Data for Name: features; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.features (id, product_id, feature, value) FROM stdin;
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.photos (id, style_id, thumbnail_url, url) FROM stdin;
\.


--
-- Data for Name: product_info; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.product_info (product_id, name, slogan, description, category, default_price) FROM stdin;
\.


--
-- Data for Name: product_styles; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.product_styles (style_id, name, sale_price, original_price, default_style, product_id) FROM stdin;
\.


--
-- Data for Name: related; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.related (id, product_id, related_product_id) FROM stdin;
\.


--
-- Data for Name: skus; Type: TABLE DATA; Schema: public; Owner: aifunlook
--

COPY public.skus (sku_id, style_id, size, quantity) FROM stdin;
\.


--
-- Name: features_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aifunlook
--

SELECT pg_catalog.setval('public.features_id_seq', 1, false);


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aifunlook
--

SELECT pg_catalog.setval('public.photos_id_seq', 1, false);


--
-- Name: product_info_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aifunlook
--

SELECT pg_catalog.setval('public.product_info_product_id_seq', 1, false);


--
-- Name: product_styles_style_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aifunlook
--

SELECT pg_catalog.setval('public.product_styles_style_id_seq', 1, false);


--
-- Name: related_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aifunlook
--

SELECT pg_catalog.setval('public.related_id_seq', 1, false);


--
-- Name: features features_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: product_info product_info_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.product_info
    ADD CONSTRAINT product_info_pkey PRIMARY KEY (product_id);


--
-- Name: product_styles product_styles_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.product_styles
    ADD CONSTRAINT product_styles_pkey PRIMARY KEY (style_id);


--
-- Name: related related_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.related
    ADD CONSTRAINT related_pkey PRIMARY KEY (id);


--
-- Name: skus skus_pkey; Type: CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.skus
    ADD CONSTRAINT skus_pkey PRIMARY KEY (sku_id);


--
-- Name: features_product_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX features_product_id_idx ON public.features USING btree (product_id);


--
-- Name: photos_styles_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX photos_styles_id_idx ON public.photos USING btree (style_id);


--
-- Name: product_info_product_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX product_info_product_id_idx ON public.product_info USING btree (product_id);


--
-- Name: product_styles_product_id_styles_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX product_styles_product_id_styles_id_idx ON public.product_styles USING btree (product_id, style_id);


--
-- Name: product_styles_style_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX product_styles_style_id_idx ON public.product_styles USING btree (style_id);


--
-- Name: related_product_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX related_product_id_idx ON public.related USING btree (product_id);


--
-- Name: skus_style_id_idx; Type: INDEX; Schema: public; Owner: aifunlook
--

CREATE INDEX skus_style_id_idx ON public.skus USING btree (style_id);


--
-- Name: features features_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product_info(product_id);


--
-- Name: photos photos_style_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES public.product_styles(style_id);


--
-- Name: product_styles product_styles_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.product_styles
    ADD CONSTRAINT product_styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product_info(product_id);


--
-- Name: related related_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.related
    ADD CONSTRAINT related_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product_info(product_id);


--
-- Name: related related_related_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.related
    ADD CONSTRAINT related_related_product_id_fkey FOREIGN KEY (related_product_id) REFERENCES public.product_info(product_id);


--
-- Name: skus skus_style_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: aifunlook
--

ALTER TABLE ONLY public.skus
    ADD CONSTRAINT skus_style_id_fkey FOREIGN KEY (style_id) REFERENCES public.product_styles(style_id);


--
-- PostgreSQL database dump complete
--

