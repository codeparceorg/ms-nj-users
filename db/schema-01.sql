-- ============================================================
-- Database Schema — Banking Application
-- PostgreSQL 17+
-- ============================================================


-- ============================================================
-- 1. Users
-- ============================================================
CREATE TABLE public.users (
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	full_name varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	password_hash text NOT NULL,
	phone varchar(20) NOT NULL,
	address varchar(200) NOT NULL,
	city varchar(100) NOT NULL,
	avatar_url varchar(200) NOT NULL,
	client_number varchar(50) NOT NULL,
	status varchar(1) DEFAULT 'A'::character varying NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id),
	CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email)
);