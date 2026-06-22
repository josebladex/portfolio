/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const EvervaultCard = ({
  text,
  className
}: {
  text?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [pythonCode, setPythonCode] = useState(() => generateCodeSnippet());

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const code = generateCodeSnippet();
    setPythonCode(code);
  }

  return (
    <div
      className={cn(
        'p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-72 relative',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} pythonCode={pythonCode} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-black/[0.3] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20 text-center">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, pythonCode }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <pre className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {pythonCode}
        </pre>
      </motion.div>
    </div>
  );
}

const generateCodeSnippet = () => {
  const codeSnippets = [
    `<?xml version="1.0" encoding="utf-8"?>
  <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      tools:context=".MainActivity">
  
      <TextView
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:text="Hello World!"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintLeft_toLeftOf="parent"
          app:layout_constraintRight_toRightOf="parent"
          app:layout_constraintTop_toTopOf="parent" />
  
  </androidx.constraintlayout.widget.ConstraintLayout>`,

    `package com.example.redsocialchile
  
  import androidx.appcompat.app.AppCompatActivity
  import android.os.Bundle
  
  class MainActivity : AppCompatActivity() {
      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          setContentView(R.layout.activity_main)
      }
  }`,

    `0111010101111110101010000010110110101010101010101010111110101010101011101010111111010101000001011011010101010101010101011111010101010101110101011111101010100000101101101010101010101010101111101010101010111010101111110101010000010110110101010101010101010111110101010101011101010111111010101000001011011010101010101010101011111010101010101110101011111101010100000101101101010101010101010101111101010101010111010101111110101010000010110110101010101010101010111110101010101`,

    `"use server";
  
    import { Database } from "@/lib/database.types";
    import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
    import dayjs, { Dayjs } from "dayjs";
    import { revalidatePath } from "next/cache";
    import { cookies } from "next/headers";
    
    export async function createAppointment(
      patient_id: string,
      patient_data: {
        name: string;
        bod: string;
        document_id: string;
        document_type: string;
        phone: string;
      },
      admin: string,
      service: string,
      date: string
    ) {
      const dateDayjsType = dayjs();
      const controldate = dateDayjsType.add(1, "month").toDate();
    
      const supabase = createServerComponentClient({ cookies });
      try {
        const { data: appointmentQuery, error: appointmentQueryError } =
          await supabase
            .from("appointments")
            .insert([
              {
                date_time: date,
                service: service,
                status: "En espera" as Database["public"]["Enums"]["status"],
                admin_id: admin.split("/")[1],
                patient_id: patient_id,
                patient_name: patient_data.name,
                admin_name: admin.split("/")[0],
              },
            ])
            .select("id");
  
        if (appointmentQueryError) {
          console.error("Error al crear cita:", appointmentQueryError);
          return { success: false, error: appointmentQueryError };
        }
  
        if (appointmentQuery) {
          console.log("Cita creada exitosamente:", appointmentQuery);
    
          const { data: historyQuery, error: historyQueryError } = await supabase
            .from("histories")
            .insert([{
              history_id: appointmentQuery[0].id,
              description: 'Nueva cita creada',
            }]);
  
          if (historyQueryError) {
            console.error("Error al crear historia clínica:", historyQueryError);
            return { success: false, error: historyQueryError };
          }
        }
      } catch (error) {
        console.error("Error general al crear cita:", error);
        return { success: false, error };
      }
    }`,

    `1110000111101111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010111000011110101010101110101010101010101101111111010111101010`,

    `type AccountFormProps = {
    adminProfiles: Database["public"]["Tables"]["profiles"]["Row"][];
    adminBios: Database["public"]["Tables"]["bio"]["Row"][];
  };
  
  const steps = [
    "Datos Personales",
    "Profesional",
    "Atención requerida",
    "Disponibilidad",
    "Confirmación",
  ];
  
  export const FormAppointment = ({
    adminBios,
    adminProfiles,
  }: AccountFormProps) => {
    const [documentIdType, setdocumentIdType] = useState<string | undefined>(
      undefined
    );
    const [uploading, setUploading] = useState(false);
  
    const form = useForm<z.infer<typeof personalDataSchema>>({
      resolver: zodResolver(personalDataSchema),
      defaultValues: {
        fname: "",
        lname: "",
        phone: "",
        documentid: "",
      },
    });
  
    const onSubmit = async (data: z.infer<typeof personalDataSchema>) => {
      try {
        setUploading(true);
        console.log("Datos enviados:", data);
  
        toast.success(
          \`Datos personales: {data.fname} {data.lname} actualizados!\`
        );
      } catch (error) {
        toast.error("Hubo un error con el servidor, intente más tarde");
      } finally {
        setUploading(false);
      }
    };
  
    return (
      <div className="w-fit h-fit flex flex-col gap-3 items-center justify-center">
        <div className="flex items-center justify-center">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-green-600 font-bold text-lg">
                Información Personal
              </CardTitle>
              <CardDescription className="text-sky-600 text-md">
                Completa tus datos personales para adquirir nuestros servicios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full flex flex-col gap-2"
                >
                  <FormField
                    control={form.control}
                    name="fname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-600">Nombres</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jhon"
                            {...field}
                            className="text-sky-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-600">Apellidos</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Wick"
                            {...field}
                            className="text-sky-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };`,

    `import numpy as np
  import matplotlib.pyplot as plt
  
  def regression_potencial(x, y):
      coeficientes = np.polyfit(np.log(x), np.log(y), 1)
      a = coeficientes[1]
      b = coeficientes[0]
  
      correlacion = np.corrcoef(np.log(x), np.log(y))[0, 1]
  
      c = np.exp(a)
  
      return b, c, correlacion
  
  def grafico_dispersion_regresion_potencial(x, y, b, c):
      plt.scatter(x, y, label='Datos')
      x_vals = np.linspace(min(x), max(x), 100)
      regresion_y = c * x_vals**b
      plt.plot(x_vals, regresion_y, color='red', label='Regresión potencial')
      plt.xlabel('R [Ohms]')
      plt.ylabel('I [Amps]')
      plt.title('Gráfico de Corriente vs Resistencia')
      plt.legend()
      plt.show()
  
  R = [10, 20, 30, 40, 50, 60, 70, 80, 90, 97]
  I = [0.547, 0.256, 0.169, 0.129, 0.102, 0.085, 0.073, 0.064, 0.057, 0.052]
  
  arr_R = np.array(R)
  arr_I = np.array(I)
  
  b, c, correlacion = regression_potencial(arr_R, arr_I)
  
  grafico_dispersion_regresion_potencial(arr_R, arr_I, b, c)
  print(f'b: {b}')
  print(f'c: {c}')
  print(f'Coeficiente de correlación: {correlacion}')`,

    `0101101011110110101101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101011010101010101010101011110101010101110101`
  ];

  const randomIndex = Math.floor(Math.random() * codeSnippets.length);
  return codeSnippets[randomIndex];
};
