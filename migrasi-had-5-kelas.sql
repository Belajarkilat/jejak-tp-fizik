-- 13 Okt 2026: had 5 kelas setiap guru (+5 bagi setiap paket_kelas), had 60 murid pada insert terus.
-- Dijalankan pada projek noaeagitwklnpmyhhhtn; versi jf_ untuk Sejarah serupa. Tambah paket buat masa ini manual:
--   update jf_guru set paket_kelas = paket_kelas + 1 where id = '<uuid guru>';
alter table jf_guru add column if not exists paket_kelas int not null default 0 check (paket_kelas >= 0);
create or replace function jf_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jf_kelas where guru = new.guru)
     >= 5 * (1 + coalesce((select paket_kelas from jf_guru where id = new.guru), 0)) then
    raise exception 'had kelas bagi setiap guru';
  end if;
  return new;
end $$;
create or replace function jf_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jf_murid where kelas = new.kelas) >= 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  return new;
end $$;
drop trigger if exists jf_had_murid on jf_murid;
create trigger jf_had_murid before insert on jf_murid for each row execute function jf_had_murid();
revoke all on function jf_had_murid() from public, anon, authenticated;
