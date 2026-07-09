export async function uploadFile(file: File) {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 2000);
  });
}