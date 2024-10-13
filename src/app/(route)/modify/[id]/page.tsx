import GamzaCard from '@/app/_components/server/GamzaCard';
import { notFound } from 'next/navigation';
import React, { Suspense, use } from 'react';
import Content from '../_components/Content';

const page = ({ params }: any) => {
  const id = Number(params.id);
  const post = getdata(id);
  const data = use(post);

  if (!data) return notFound();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="flex-col gap-6">
        <GamzaCard title={`프로젝트 수정`} content={<Content {...data} />} />
      </div>
    </Suspense>
  );
};

export default page;

const getdata = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`,
      {
        next: { revalidate: 10 },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NzlmYzc0NzhkMGQ3YzM2YTdiMzk3OWMxZDUwMjA5MGE1ZDliMjhlZjBiZmFmZjhiOWEyZGRlZDhjNTg0ODg3YjM0ZjBkYTk1MDEzZmY5Mzc4NzNlMzg4YzE0MjQ5YjgiLCJpYXQiOjE3Mjg4MTAxNzAsImV4cCI6MTcyODgxMzc3MH0.JgaEosboFq4ARHtUlWPhxmZqah_-1nbQT6ERzlONTnBv6Ek0Mgmv3GkCr-hOnIkvVBVcEyqhZrPqWS3nxph4bQ',
        },
      }
    );

    if (res.status === 401 || res.status === 404 || res.status === 500) return;

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
