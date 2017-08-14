import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;


public class FileChecker {

	private static boolean doesFileExist(String filePath) {
		
		try {
			File f = new File(filePath);
			if(f.exists() && f.isDirectory() == false) { 
				System.out.println("File with path ./" + filePath + " exists");	
				return true;
			} else {
				System.out.println("File with path ./" + filePath + " does not exist");
				return false;
			}
		}
		// if something goes wrong
		catch (Exception e) {
			e.printStackTrace();
		}	
		return false;
	}
	
	public static void main(String[] args) throws IOException {
		
		Scanner in = new Scanner(System.in);
		
		System.out.print("Enter the file path: ");
		String filePath = in.nextLine();	
		
		if(doesFileExist(filePath) == true) {
			try {
				File f = new File(filePath);
				
				// buffered reader to read file f
				BufferedReader br = new BufferedReader(new FileReader(f));
				String line;
				
				// read line by line
				while((line = br.readLine()) != null) {
					
					// split the line with '-' as the delimiter
					String[] parts = line.split("–");
					// 1st part is the word
					String word = parts[0];
					// all the meanings of the word
					String[] meanings = parts[1].split(",");
					System.out.println(word);
					
					// print the all the meanings
					for(String string : meanings) {
						System.out.println(string.trim());
					}
				
				}

				br.close();
			}
			catch (Exception e) {
				e.printStackTrace();
			}
		}
		in.close();
	}
}