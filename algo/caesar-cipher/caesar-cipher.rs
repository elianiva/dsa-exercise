use std::char;

fn main() {
    // const RAW: &str = "THE BROWN FOX JUMPS OVER THE LAZY DOG";
    const RAW: &str = "tHiS iS An unNEcesSariLy loNg SenTeNCe tO TeST iF my CodE WOrkS";
    const SHIFT: i32 = 12;

    let encrypted = encrypt(RAW, SHIFT);

    println!("enc: {}", encrypted);
    println!("dec: {}", decrypt(&encrypted[..], SHIFT));
}

fn modulo(x: i32, y: i32) -> u32 {
    ((x % y + y) % y) as u32
}

fn encrypt(data: &str, shift: i32) -> String {
    data.chars()
        .map(|letter| {
            let char_code = letter as i32;
            let is_uppercase = &letter.to_string() == &letter.to_uppercase().to_string();
            let ascii_shift = if is_uppercase { 65 } else { 97 };

            if letter == ' ' {
                ' '
            } else {
                char::from_u32(
                    modulo(char_code - ascii_shift + shift, 26 as i32) + ascii_shift as u32,
                )
                .unwrap()
            }
        })
        .collect::<String>()
}

fn decrypt(data: &str, shift: i32) -> String {
    data.chars()
        .map(|letter| {
            let char_code = letter as i32;
            let is_uppercase = &letter.to_string() == &letter.to_uppercase().to_string();
            let ascii_shift = if is_uppercase { 65 } else { 97 };

            if letter == ' ' {
                ' '
            } else {
                char::from_u32(
                    modulo(char_code - ascii_shift - shift, 26 as i32) + ascii_shift as u32,
                )
                .unwrap()
            }
        })
        .collect::<String>()
}
